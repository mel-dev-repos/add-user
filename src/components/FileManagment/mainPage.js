import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CenterContent from "./MainContent/MainContent";
import Navbar from "./Navbar/navbar";
import Folder from "../FileManagment/Folder/folder";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "25px",
  boxShadow: "none",
  height: "100%",
}));

export default function AutoGrid() {
  return (
    <Box
      sx={{
        margin: "35px",
        borderRadius: "25px",
        backgroundColor: "white",
        height: "100%",
        marginLeft:"10vw"
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item sx={{marginTop:"10%"}}>
            <Navbar />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item
            style={{
              backgroundColor: "#EDEBFF",
              marginTop: "35px",
            }}
          >
            <CenterContent />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Folder />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
