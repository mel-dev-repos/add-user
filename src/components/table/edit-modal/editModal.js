import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
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

export default function BasicModal({ DataID, handleAddEdditeds }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handelChange = (event) => {
    let value = event.target.value;
    let nameInp = event.target.name;
    setName((prevState) => ({
      ...prevState,
      [nameInp]: value,
    }));
  };
  const handelUpdate = () => {
    axios.put("https://reqres.in/api/users/1").then((res) => {
      if (res.status === 200) {
        handleClose();
      }

      handleAddEdditeds(name);
    });
  };
  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen(DataID)}>
        edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type={"text"}
            placeholder="firstName"
            name="first_name"
            onChange={handelChange}
          />
          <br />
          <input
            type={"text"}
            placeholder="lastName"
            name="last_name"
            onChange={handelChange}
          />
          <br />
          <input type={"text"} placeholder="email" name="email" />
          <br />
          <Button variant="contained" onClick={handelUpdate}>
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
