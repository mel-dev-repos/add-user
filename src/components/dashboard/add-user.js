import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect } from "react";
import DragAndDrop from "./drag&drop";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CloseIcon from "@mui/icons-material/Close";
import Upload from "./uploadImg";
import {
  StyledHeader,
  StyledModifyRole,
  StyledAssignButton,
  MainHeader,
  H2,
  Border,
  StyledButtonAdd,
  StyledButton,
  CancleButton,
  BorderBottom,
  Buttons,
} from "./styles";
import DoneIcon from "@mui/icons-material/Done";
import { TextField } from "@mui/material";

const AddUser = ({ addToList }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [userInfo, setName] = useState({
    name: "",
    lastName: "",
    email: "",
    image: null,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "15px",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    border: "2px solid transparent",
    boxShadow: 24,
  };

  const handelChange = ({ target: { name, value } }) => {
    console.log(value);
    setSelectedValue(value);
    setName({ ...userInfo, [name]: value });
  };

  const handleAddUser = () => {
    axios
      .post("https://6293414c7aa3e6af1a0864da.mockapi.io/users")
      .then((res) => {
        if (res.status === 201) {
          handleClose();
        }
        addToList(userInfo);
      });
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handelChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MainHeader>
            <StyledHeader>
              <PersonAddAltIcon />
              <H2> Add new user</H2>
            </StyledHeader>
            <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
          </MainHeader>

          <Border />
          <div style={{ height: "55vh", overflowY: "auto", padding: "1rem" }}>
            <TextField
              style={{ marginTop: "15px", width: "100%" }}
              autoComplete="current-password"
              id="outlined-password-input"
              label="name"
              name="name"
              onChange={handelChange}
            />

            <TextField
              style={{ marginTop: "15px", width: "100%" }}
              id="outlined-password-input2"
              label="last name"
              name="lastName"
              onChange={handelChange}
            />

            <TextField
              style={{ marginTop: "15px", width: "100%" }}
              id="outlined-password-input3"
              label="email "
              name="email"
              onChange={handelChange}
            />

            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ marginTop: "10px" }}
              >
                Role:
              </FormLabel>

              <FormControlLabel
                checked={selectedValue === "Viewer"}
                color="secondary"
                onChange={handelChange}
                value="Viewer"
                name="stats"
                control={<Radio />}
                label="Viewer"
              />

              <FormControlLabel
                checked={selectedValue === "Admin"}
                value="Admin"
                control={<Radio />}
                name="stats"
                label="Admin"
                onChange={handelChange}
              />
              <FormControlLabel
                checked={selectedValue === "Editor"}
                onChange={handelChange}
                value="Editor"
                name="stats"
                control={<Radio />}
                label="Editor"
              />
              <FormControlLabel
                checked={selectedValue === "user"}
                onChange={handelChange}
                value="user"
                control={<Radio />}
                label="User"
                name="stats"
              />
            </FormControl>

            <StyledAssignButton>Assign</StyledAssignButton>
            <DragAndDrop handelChange={handelChange} name="image" />
            <Upload handelChange={handelChange} name="image" />
          </div>

          <Buttons>
            <CancleButton variant="contained" onClick={handleClose}>
              <CloseIcon />
              cancle
            </CancleButton>
            <StyledButton variant="contained" onClick={handleAddUser}>
              <DoneIcon />
              add
            </StyledButton>
          </Buttons>
        </Box>
      </Modal>

      <StyledButtonAdd onClick={handleOpen}>
        <PersonAddAltIcon className="icon" />
        add user
      </StyledButtonAdd>
    </>
  );
};

export default AddUser;
