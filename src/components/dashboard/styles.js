import SettingsIcon from "@mui/icons-material/Settings";
import CancelIcon from "@mui/icons-material/Cancel";
import styled, { keyframes } from "styled-components";
import MuiTable, { TableProps } from "@mui/material/Table";
import MuiTableHead, { TableHeadProps } from "@mui/material/TableHead";
import MuiTableBody, { TableBodyProps } from "@mui/material/TableBody";
import MuiTableRow, { TableRowProps } from "@mui/material/TableRow";
import MuiTextFeild, { TextFeildProps } from "@mui/material/TextField";
import MuiTableCell, { TableCellProps } from "@mui/material/TableCell";
import { Button } from "@mui/material";
import { style } from "@mui/system";

export const StyledTableCell = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
export const StyledDiv = styled.div`
  display: flex;
`;
export const StyledDiv2 = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const StyledModifyIcon = styled(SettingsIcon)`
  color: gray;
  margin: 12px 5px 0 0;
`;
export const StyledDeleteIcon = styled(CancelIcon)`
  color: gray;
  margin: 0px 5px 0 0;
`;

// Add custom styles to table component
export const StyledTable = styled(MuiTable)`
  border-collapse: separate;
  /* border-spacing: 0px 5px; */ //OLD
  border-spacing: 0px 0px;
  margin: 0;
  overflow-x: scroll;
`;

// Add custom styles to thead component
export const TableHead = styled(MuiTableHead)`
  border-radius: 8px;

  tr {
    border-radius: 8px;
    /* background-color: rgb(241, 245, 249); */

    &:hover {
      /* background-color: rgb(241, 245, 249); */
    }

    th:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    th {
      background-color: rgb(241, 245, 249);
      position: static;
    }

    th:last-child {
      border-bottom-right-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

// Add custom styles to tbody component
export const TableBody = styled(MuiTableBody)``;

// Add custom styles to td component
export const TableCell = styled(MuiTableCell)`
  font-size: 90%;
  /* border-top: none !important; */
  /* border-bottom: 2px solid #b2b2b2 !important; */
  border: none;

  .table-icon {
    margin-right: 4px;
  }
`;

// Add custom styles to tr component
export const TableRow = styled(MuiTableRow)`
  background-color: #ffffff;
  border-radius: 0.3rem;
  margin: 0.1rem 0rem;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: rgb(0 0 0 / 1%);
  }

  td {
    /* border: 1px #e2e2e2; */
    border: none;
    /* border-style: solid none; */
  }

  td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    /* border: 1px #e2e2e2; */
    border: none;
    /* border-style: solid none solid solid; */
  }

  td:last-child {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    /* border: 1px #e2e2e2; */
    border: none;
    /* border-style: solid solid solid none; */
    white-space: nowrap;
    width: 1%;
  }

  .table-date {
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;

    @media (max-width: 1400px) {
      max-width: 140px;
    }

    @media (max-width: 1200px) {
      max-width: 100px;
    }

    @media (max-width: 1024px) {
      max-width: 60px;
    }
  }

  .small-row {
    white-space: nowrap;
    width: 1%;
  }

  @media (max-width: 1445px) {
    td,
    th {
      padding: 0.5rem;
    }
  }

  /* @media (max-width: 1390px) {
    td,
    th {
      padding: 0.3rem;
    }
  } */
`;

export const YelloBox = styled.div`
  width: 60px;
  padding: 0.1rem 0.6rem;
  border-radius: 5px;
  color: #fff;
  background-color: #fdb933;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.fw};
  width: ${(p) => p.w};
  max-width: 200px;
  font-size: 90%;
  margin-left: 0.4rem;
  padding: 0.25rem 0.4rem;
  border-radius: 3px;
  color: #fff;
  background-color: ${(props) => props.backGround};

  .box-title {
    display: flex;
    align-items: center;
  }

  .box-icon,
  .box-spinner {
    margin-right: 8px;
  }
`;

export const StyledDoubleBox = styled.div`
  width: 40px;
  border: 1px solid #ddd;
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  background-color: ${(props) => (props.active ? "#30A5A9" : "#f3f6f5")};
`;

export const H6 = styled.h6`
  font-size: 90%;
  color: #117675;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0rem 1rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Border = styled.div``;
export const BorderBottom = styled.div``;
export const H2 = styled.h2`
  transform: translateX(10px);
`;
export const NameTitle = styled.h6`
  font-size: 90%;
  font-weight: 400;
  color: #117675;
  margin: 0;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 1550px) {
    max-width: 350px;
  }

  @media (max-width: 1400px) {
    max-width: 250px;
  }

  @media (max-width: 1200px) {
    max-width: 200px;
  }

  @media (max-width: 1024px) {
    max-width: 100px;
  }
`;

export const TableHeadBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 80%;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  white-space: nowrap;

  .title {
    margin-right: 4px;
  }
`;

const glowing = keyframes`
 0% { box-shadow: 0 0 -10px #d22346; }
  40% { box-shadow: 0 0 20px #d22346; }
  60% { box-shadow: 0 0 20px #d22346; }
  100% { box-shadow: 0 0 -10px #d22346; }
`;

export const GlowBtn = styled.div`
  .live {
    /* margin-left: 0.5rem; */
    box-shadow: ${(p) =>
      p.live ? "0 3px 6px 0 rgba(0, 103, 103, 0.2)" : "none"};
    border: ${(p) => (p.live ? "1px solid #a61c37" : "1px solid transparent")};
    animation: ${(p) => (p.live ? glowing : null)} 1.5s infinite ease-in-out
      both;
  }
`;

export const ToolIcon = styled.i`
  font-size: 140%;
  font-weight: 700;
  color: #666;
  cursor: pointer;
`;

export const TableData = styled.td`
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledButtonAdd = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 4px;
  margin: 25px 0px 0px 40px;
  width: 10%;
  height: 40px;
  justify-self: right;
  text-align: center;
  color: white;
  cursor: pointer;
`;
export const StyledButton = styled.button`
  background-color: black;
  font-size: 0.875rem;
  text-transform: uppercase;
  border-radius: 4px;
  min-width: 110px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: center;
  color: white;
`;
export const CancleButton = styled.button`
  background-color: #f8f8f8;
  float: right;
  margin-right: 15px;
  font-size: 0.875rem;
  text-transform: uppercase;
  border: 1px solid darkGray;
  border-radius: 4px;
  min-width: 110px;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
`;
export const Buttons = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem;
  margin-top: 25px;
`;
export const StyledDivision = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 17px 0;
`;
export const StyledModifyRole = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  margin: 10px 0 17px 0;
`;
export const StyledAssignButton = styled.button`
  border: 1px solid black;
  background-color: black;
  color: white;
  padding: 12px;
  border-radius: 10px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
`;
