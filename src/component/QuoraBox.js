import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../Css/QuoraBox.css";
import { selectUser } from "../features/userSlice";

function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src={user.photo} />
        <h5>{user.displayName}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link ?</p>
      </div>
    </div>
  );
}

export default QuoraBox;
