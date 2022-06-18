import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import React from 'react';

const CreateTable = () => {
    return (
        <div>
          
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>user</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Location</TableCell>
      <TableCell>Phone</TableCell>
      <TableCell>Contact</TableCell>
      <TableCell>Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" style={{ display: "flex" }}>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
        />
        <h3>Kiran Acharaya </h3>
      </TableCell>
      <TableCell>
        <span className="span"></span> Active
      </TableCell>
      <TableCell>Bangolare</TableCell>
      <TableCell className="phone">+919876543215</TableCell>
      <TableCell>
        <Button variant="contained">Contact</Button>
      </TableCell>
      <TableCell>{<MoreVertIcon />}</TableCell>
    </TableRow>
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" style={{ display: "flex" }}>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
        />
        <h3>Kiran Acharaya </h3>
      </TableCell>
      <TableCell>
        <span className="span"></span> Active
      </TableCell>
      <TableCell>Bangolare</TableCell>
      <TableCell className="phone">+919876543215</TableCell>
      <TableCell>
        <Button variant="contained">Contact</Button>
      </TableCell>
      <TableCell>{<MoreVertIcon />}</TableCell>
    </TableRow>
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" style={{ display: "flex" }}>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
        />
        <h3>Kiran Acharaya </h3>
      </TableCell>
      <TableCell>
        <span className="span"></span> Active
      </TableCell>
      <TableCell>Bangolare</TableCell>
      <TableCell className="phone">+919876543215</TableCell>
      <TableCell>
        <Button variant="contained">Contact</Button>
      </TableCell>
      <TableCell>{<MoreVertIcon />}</TableCell>
    </TableRow>
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" style={{ display: "flex" }}>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
        />
        <h3>Kiran Acharaya </h3>
      </TableCell>
      <TableCell>
        <span className="span"></span> Active
      </TableCell>
      <TableCell>Bangolare</TableCell>
      <TableCell className="phone">+919876543215</TableCell>
      <TableCell>
        <Button variant="contained">Contact</Button>
      </TableCell>
      <TableCell>{<MoreVertIcon />}</TableCell>
    </TableRow>
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" style={{ display: "flex" }}>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
        />
        <h3>Kiran Acharaya </h3>
      </TableCell>
      <TableCell>
        <span className="span"></span> Active
      </TableCell>
      <TableCell>Bangolare</TableCell>
      <TableCell className="phone">+919876543215</TableCell>
      <TableCell>
        <Button variant="contained">Contact</Button>
      </TableCell>
      <TableCell>{<MoreVertIcon />}</TableCell>
    </TableRow>
  </TableBody>
</Table>
</TableContainer>  
        </div>
    );
}

export default CreateTable;
