import React from "react";
import { StyledDeleteIcon } from "../styles";
import axios from "axios";
const Remove = ({ ID, user, setUser }) => {
  //deleting users
  const handleClick = async (id) => {
    try {
      // const res = await axios.delete(
      //   `https://6293414c7aa3e6af1a0864da.mockapi.io/users/${id}`
      // );
      const notDeletedUsers = user?.filter((item) => {
        return item.id !== id;
      });
      setUser(notDeletedUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <StyledDeleteIcon onClick={() => handleClick(ID)} />
    </div>
  );
};

export default Remove;
