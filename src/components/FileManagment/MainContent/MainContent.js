import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  StyledInput,
  StydledDisplayType,
  IconAndType,
  Header,
  H1,
} from "../style";
import { BsGrid } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";
import DataTable from "./tableOfData";
import { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import "./mainContent.css";
const MainContent = () => {
  const [clickList, setClickList] = useState(false);
  const [clickGrid, setClickGrid] = useState(false);

  const handleListClick = () => {
    setClickList(true);
    setClickGrid(false);
  };
  const hanldeGridClick = () => {
    setClickList(false);
    setClickGrid(true);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="search">
          <AiOutlineSearch className="search-icon" />
          <StyledInput placeholder="Search file.." className="input-search" />
        </div>
        <StydledDisplayType className="display-type">
          <IconAndType
            className={clickGrid ? "purple" : null}
            onClick={hanldeGridClick}
          >
            <BsGrid style={{ marginRight: "5px" }} />
            Grid
          </IconAndType>
          <IconAndType
            className={clickList ? "purple" : null}
            onClick={handleListClick}
          >
            <AiOutlineUnorderedList style={{ marginRight: "5px" }} />
            List
          </IconAndType>
        </StydledDisplayType>

        <Box sx={{ color: "action.active" }}>
          <Badge color="secondary" variant="dot" className="badge">
            <VscBellDot className="bellIcon" />
          </Badge>
        </Box>
      </div>
      <Header>
        <H1>Shared File</H1>
      </Header>
      <DataTable />
    </>
  );
};

export default MainContent;
