import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlineOutlined,
  MoreHorizOutlined,
  RepeatOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Css/Post.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  data,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { selectUser } from "../features/userSlice";
import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";

Modal.setAppElement("#root");

function Post({ Id, question, image, timestamp, quoraUser }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);

  useEffect(() => {
    if (questionId) {
      const q = query(
        collection(db, "questions", questionId, "answer"),
        orderBy("timestamp", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) =>
        setGetAnswers(
          snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
        )
      );

      return () => {
        unsubscribe();
      };
    }
  }, [questionId]);

  const handleAnswer = async (e) => {
    e.preventDefault();

    if (questionId) {
      try {
        const docRef = await addDoc(
          collection(db, "questions", questionId, "answer"),
          {
            user: user,
            answer: answer,
            questionId: questionId,
            timestamp: serverTimestamp(),
          }
        );
        console.log("Answer written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding answer: ", error);
      }
    }
    setAnswer("");
    setIsModalOpen(false);
  };

  return (
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
      <div className="post__info">
        <Avatar
          src={
            quoraUser.photo
              ? quoraUser.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
          imgProps={{ referrerPolicy: "no-referrer" }}
        />
        <h5>
          {quoraUser.displayName ? quoraUser.displayName : quoraUser.email}
        </h5>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{question}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 700,
                height: 600,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-300px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {quoraUser.displayName
                    ? quoraUser.displayName
                    : quoraUser.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer">
          {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
        <img src={image} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOutlined />
        <ChatBubbleOutlineOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
