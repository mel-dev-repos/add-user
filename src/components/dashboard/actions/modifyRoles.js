import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  StyledHeader,
  MainHeader,
  H2,
  StyledButton,
  Border,
  StyledModifyIcon,
  CancleButton,
  BorderBottom,
  StyledDiv,
  StyledDivision,
  Buttons,
} from "../styles";
import { GrUserSettings } from "react-icons/gr";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Modifyroles = ({ ID, handleChange }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectRadio = ({ target: { value } }) => {
    setSelectedValue(value);
    handleChange(ID, value);
  };
  const handleClick = () => {
    handleClose();
  };
  return (
    <>
      <StyledDiv onClick={handleOpen}>
        <StyledModifyIcon />
        <p style={{ cursor: "pointer" }}> Modify roles</p>
      </StyledDiv>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MainHeader>
            <StyledHeader>
              <GrUserSettings
                style={{ width: "25px", height: "25px", marginBottom: "5px" }}
              />
              <H2> Modify Your Role</H2>
            </StyledHeader>
            <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
          </MainHeader>
          <Border />
     
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Role:</FormLabel>
              <FormControlLabel
                checked={selectedValue === "Viewer"}
                onChange={handleSelectRadio}
                value="Viewer"
                name="role"
                control={<Radio />}
                label="Viewer"
              />

              <FormControlLabel
                checked={selectedValue === "Admin"}
                value="Admin"
                control={<Radio />}
                name="role"
                label="Admin"
                onChange={handleSelectRadio}
              />
              <FormControlLabel
                checked={selectedValue === "Editor"}
                onChange={handleSelectRadio}
                value="Editor"
                name="role"
                control={<Radio />}
                label="Editor"
              />
              <FormControlLabel
                checked={selectedValue === "user"}
                onChange={handleSelectRadio}
                value="user"
                control={<Radio />}
                label="User"
                name="role"
              />
            </FormControl>
     
          <BorderBottom />
          <Buttons>
            <CancleButton variant="contained" onClick={handleClose}>
              <CloseIcon />
              cancle
            </CancleButton>
            <StyledButton variant="contained" onClick={handleClick}>
              <DoneIcon />
              done
            </StyledButton>
          </Buttons>
        </Box>
      </Modal>
    </>
  );
};

export default Modifyroles;
