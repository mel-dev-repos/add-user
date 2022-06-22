import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HeaderCol3,BorderBottom } from "../style";
import "./folder.css";
const Folder = () => {
  return (
    <div>
      <HeaderCol3>
        <h1 style={{ color: "black" }}>File Info</h1>
        <AiOutlineClose className="close-icon" />
      </HeaderCol3>
      <div className="folder-txt">
        <img src={require("../6329.jpg")} className="pic" />
        <h1 className="h1-txt">Wireframes Project A</h1>
        <h3> 234 File Inside -1,56 GB</h3>
      </div>
     <BorderBottom></BorderBottom>
    </div>
  );
};

export default Folder;
