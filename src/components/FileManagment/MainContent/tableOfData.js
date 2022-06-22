import * as React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiShareAlt } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { BiMove } from "react-icons/bi";
import { TbCopy } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { IconTxt } from "../style";
import axios from "axios";
import "./mainContent.css";

export default function DataTable() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userRow, setUserRow] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const open = Boolean(anchorEl);

  //view images
  async function getData() {
    const imgData = await axios.get(
      "https://62b1b3fd196a9e98703b65db.mockapi.io/images"
    );
    setUserRow(imgData.data);
  }

  //delete
  const handleDeleteClick = (ID) => {
    console.log(ID);

    try {
      // axios
      //   .delete("https://62b1b3fd196a9e98703b65db.mockapi.io/images")
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      const userData = [...userRow];
      const notDeletedUsers = userData?.filter((item) => {
        return item.id !== ID;
      });
      setUserRow(notDeletedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //open menu
  const handleClick = (event) => {
    setIsClick(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer className="table-conainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bordeBottom: "none ! important" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>Last Modified</TableCell>
            <TableCell>
              <AiOutlineArrowDown />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRow?.map((item) => {
            return (
              <>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell>
                    <img src={item.image} />
                  </TableCell>
                  <TableCell>{item.member}</TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                  <TableCell>
                    {<IoIosMore onClick={handleClick} />}
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      sx={{
                        " .MuiPaper-root": {
                          borderRadius: "15px",
                          boxShadow: "rgb(46 61 73 / 20%) 5px 5px 25px 0px",
                          padding: "7px",
                          "&.MuiDataGrid-row": {
                            display: "none",
                          },
                        },
                      }}
                      className="menu"
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-icon",
                      }}
                    >
                      <IconTxt>
                        <MenuItem onClick={handleClose}>
                          <BiShareAlt className="icon-menu" /> Share to...
                        </MenuItem>
                      </IconTxt>
                      <IconTxt>
                        <MenuItem onClick={handleClose}>
                          <BsDownload className="icon-menu" />
                          Download file
                        </MenuItem>
                      </IconTxt>
                      <IconTxt>
                        <MenuItem onClick={handleClose}>
                          <BiMove className="icon-menu" />
                          Move to
                        </MenuItem>
                      </IconTxt>
                      <IconTxt>
                        <MenuItem onClick={handleClose}>
                          <TbCopy className="icon-menu" />
                          Copy
                        </MenuItem>
                      </IconTxt>
                      <br />

                      <IconTxt
                        style={{ color: "red" }}
                        onClick={() => handleDeleteClick(item.id)}
                      >
                        <MenuItem>
                          <RiDeleteBin5Line className="icon-menu" />
                          Delete
                        </MenuItem>
                      </IconTxt>
                    </Menu>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
