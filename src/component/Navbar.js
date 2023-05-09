import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Input, Link } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";
import "../Css/Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

Modal.setAppElement("#root");

function Navbar() {
  const user = useSelector(selectUser);
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    addQuestion(input, user, inputUrl);
    setInput("");
    setInputUrl("");
  };
  const questionsCollectionRef = collection(db, "questions");
  const addQuestion = async (input, user, inputUrl) => {
    try {
      const docRef = await addDoc(questionsCollectionRef, {
        question: input,
        imageUrl: inputUrl,
        timestamp: serverTimestamp(),
        user: user,
      });
      console.log("Question added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding question: ", e);
    }
  };


  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="qHeader__icons">
        <div className="qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            onClick={() => auth.signOut()}
            src={user.photo}
            imgProps={{ referrerPolicy: "no-referrer" }}
          />
        </div>
        <LanguageIcon />
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
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
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" src={user.photo} />
            <p>{user.displayName ? user.displayName : user.email} asked </p>
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What','How','Why',etc."
            />
            <div className="modal__fieldLink">
              <AddLinkIcon />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: include a link that gives context"
              />
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
            <button onClick={handleQuestion} type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
