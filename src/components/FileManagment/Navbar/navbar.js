import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import  {StyledDiv}  from "../style";
import "./navbar.css"
const Navbar = () => {
  return (
    <StyledDiv>
      <div className="icon-txt">
        <AiOutlineHome className="icon-nav" /> My Cloud
      </div>
      <div className="icon-txt">
        <BsFillPeopleFill className="icon-nav" /> Shared file
      </div>
      <div className="icon-txt">
        <FaRegStar className="icon-nav" /> Starred
      </div>
      <div className="icon-txt">
        <FiTrash className="icon-nav" /> Recycle bin
      </div>
      <br />

      <div className="icon-txt">
        <FiHelpCircle className="icon-nav" /> Help
      </div>
      <div className="icon-txt">
        <GiSettingsKnobs className="icon-nav" /> Settings
      </div>
    </StyledDiv>
  );
};

export default Navbar;
