import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Checkbox } from "@mui/material";
import axios from "axios";
import Remove from "./actions/remove";
import Modifyroles from "./actions/modifyRoles";
import "./tableDashboard.css";
import { TableHead } from "@mui/material";
import { StyledTableCell, StyledDiv2, TableCell } from "./styles";
import { useEffect, useState } from "react";
import Table from "../../Table/Table/Table";
import AddUser from "./add-user";

export default function BasicTable() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://6293414c7aa3e6af1a0864da.mockapi.io/users"
      );
      const users = response.data.map((u) => ({ ...u, stats: "viewer" }));
      setUser(users);
    }
    getData();
  }, []);

  //handle changing roles
  const handleChange = (id, role) => {
    const users = [...user];
    const idx = users.findIndex((u) => u.id === id);
    if (idx > -1) users[idx].stats = role;
    setUser(users);
  };

  //adding users
  const handleAddToList = (newUser) => setUser([newUser, ...user]);

  //choosing roles
  const handleRadioChange = () => {};

  return (
    <>
      <AddUser
        addToList={handleAddToList}
        user={user}
        handleRadioChange={handleRadioChange}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>User Role</TableCell>
            <TableCell style={{ textAlign: "center" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user?.length > 0
            ? user?.map((item) => {
                return (
                  <>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        key={item?.id}
                        width="33%"
                      >
                        <div style={{ display: "flex" }}>
                          <Checkbox />
                          <img src={item?.image} />
                          <h5>
                            {item?.name} {item?.lastName} <br />
                            <span> {item?.email}</span>
                          </h5>
                        </div>
                      </TableCell>
                      <TableCell> logged in</TableCell>
                      <TableCell>{item?.stats}</TableCell>

                      <TableCell>
                        <StyledTableCell>
                          <Modifyroles
                            ID={item?.id}
                            handleChange={handleChange}
                          />

                          <StyledDiv2>
                            <Remove
                              ID={item?.id}
                              setUser={setUser}
                              user={user}
                            />
                            Remove User
                          </StyledDiv2>
                        </StyledTableCell>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })
            : null}
        </TableBody>
      </Table>
    </>
  );
}
