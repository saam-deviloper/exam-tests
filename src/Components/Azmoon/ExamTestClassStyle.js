import React, { Component } from "react";
import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
export default class ExamTestClassStyle extends Component {
  render() {
    return (
      <>
        <Container>
          <Box sx={{backgroundColor:"dodgerblue",mt:5,border:1,p:2,borderRadius:1}}  >
          <h1>Question 1. Class Component type</h1>

          {/* material ui design */}
          <TextField
            id="standard-basic"
            label="inline onChangeHandler"
            variant="standard"
            onChange={(event) => console.log(event)}
          />
          </Box>
        </Container>
      </>
    );
  }
}
