import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import CustomizedMenus from "./actions";
import { Button } from "@mui/material";
import HttpService from "../../service/service";
import CircularIndeterminate from "../loder/loader";
import "./table.css";
import BasicModal from "../table/add-user";
import { BASE_URL } from "../../configs/config";
import PaginationControlled from "../../components/table/pagination/pagination";
import Edit from "./edit";
export default function BasicTable() {
  const [dataUser, setDataUser] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = React.useState(false);
  function createData(name, user_id, Status, phone) {
    return { name, user_id, Status, phone };
  }
  useEffect(() => {
    try {
      setLoading(true);
      async function getData(data) {
        const response = await HttpService.get(
          BASE_URL + `/users?page=${page}&per_page=5&`,
          data
        );
        console.log(response.data);
        setDataUser(response.data);

        setLoading(false);
      }
      getData();
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  }, [page]);
  //handel deleting whilde clicking on a delete button
  const handleDeleteClick = (id) => {
    console.log(id);
    const dataUserId = dataUser?.data?.findIndex((item) => {
      return item.id === id;
    });
    let userState = { ...dataUser };
    userState.data.splice(dataUserId, 1);
    setDataUser(userState);
  };
  //handel editing whilde clicking on an edit button

  const handleOpen = (id) => setOpen(true);
  const handleClose = () => setOpen(false);

  //handle adding users
  const handleAddToList = (newUser) => {
    setDataUser({ ...dataUser, data: [newUser, ...dataUser.data] });
  };

  //handel updating edited rows
  const handleAddEdditeds = (editedUser) => {
    setDataUser({ data: [editedUser, ...dataUser.data] });
  };
  const handleClick = (id) => {
    dataUser?.data?.filter((item) => {
      return item.id === id;
      setDataUser(document.getElementById("table-cell"));
    });

    setIsEditing(true);
  };
  return (
    <>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <main>
            <BasicModal
              addToList={handleAddToList}
              setDataUser={setDataUser}
              setLoading={setLoading}
              loading={loading}
              dataUser={dataUser}
            />
            <h2>Users</h2>
            <TableContainer component={Paper} className="table-conainer">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>users</TableCell>
                    <TableCell>user_id</TableCell>
                    <TableCell>ُStatus</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataUser
                    ? dataUser.data?.map((data) => (
                        <TableRow
                          key={data.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            id="table-cell"
                            component="th"
                            scope="row"
                            name={data.first_name}
                            onDoubleClick={() => handleClick(data.id)}
                          >
                            {isEditing ? (
                              <Edit
                                dataUser={dataUser}
                                setDataUser={setDataUser}
                              />
                            ) : (
                              <div style={{ display: "flex" }}>
                                <img src={data.avatar} />
                                <h5>
                                  {data.first_name} {data.last_name} <br />
                                  <span> {data.email}</span>
                                </h5>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{data.id}</TableCell>
                          <TableCell>
                            <span className="span"></span> Active
                          </TableCell>
                          <TableCell>Singapore</TableCell>
                          <TableCell>+98142564</TableCell>
                          <TableCell>
                            <Button variant="contained">Contact</Button>
                          </TableCell>
                          <TableCell>
                            <CustomizedMenus
                              handleAddEdditeds={handleAddEdditeds}
                              setIdEditing={setIsEditing}
                              dataFirstName={data.first_name}
                              Data={data}
                              dataUser={dataUser}
                              handleDeleteClick={handleDeleteClick}
                              handleEditClick={handleOpen}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
          </main>
          <PaginationControlled page={page} setPage={setPage} />
        </>
      )}
    </>
  );
}
