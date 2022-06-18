import React from "react";
import { TextField } from "@mui/material";
import { TableCell } from "@mui/material";
import { useState } from "react";
const Edit = ({ dataUser, setDataUser }) => {
  const [value, setValue] = React.useState("");
  const [show, setShow] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setShow(false);
  };
  return (
    <div>
      {show ? (
        <TextField
          onChange={handleChange}
          onDoubleClick={handleClick}
          value={value}
        />
      ) : (
        <TableCell onChange={handleChange}> {value}</TableCell>
      )}
    </div>
  );
};

export default Edit;
