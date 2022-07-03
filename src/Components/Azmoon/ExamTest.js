import { Box, TextField } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

export default function ExamTest() {
  const [value, setValue] = useState();
  const compdidmountAnswer = useRef(); //useRef for change value of element in string(one way)
  const [data,setData] = useState();

  useEffect(() => {
     async function getData() {
      //declration of method inside useEffect where we want to call
      console.log(
        "getData func called after component did mount(page loaded Compeletly-rendered)"
      );

      compdidmountAnswer.current.innerHTML =
        "getData call: getData called successfully"; //change P element with new value
        setData(await axios.get(process.env.REACT_APP_BASE_USERS_URL)  //hide url with .env filesystem
        .then(rsp=>rsp.data))   //***url:https://jsonplaceholder.typicode.com/users *****
        //get data from real api with async/await put them in State
        // then show in root
    }
    
    getData(); //calling function after entire component mounted

  }, []); //empty array means => mounting stage / componentDidMount

  return (
    <div>
      <Container fixed>
        <Box
          sx={{
            backgroundColor: "orange",
            mt: 5,
            border: 1,
            p: 2,
            borderRadius: 1,
          }}
        >
          <h1>functional type</h1>
          <h1>Question 1.</h1>
          {/* inline onChange Handler with functional way */}

          {/* return onChange whole Object */}
          <input
            type="text"
            placeholder="log object"
            onChange={(event) => {
              console.log(event);
            }}
          />
          <br />

          {/* return onChange value of target input */}
          <input
            type="text"
            placeholder="log target value"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <br />

          {/* material ui design */}
          <TextField
            sx={{ m: 2 }}
            id="standard-basic"
            label="inline onChangeHandler"
            variant="standard"
            onChange={(event) => {
              console.log(event);
              setValue(event.target.value);
            }}
          />
          <p>event.target.value : {value}</p>

          <h1>Question 2.</h1>
          <p>
            we use{" "}
            <Box
              sx={{ fontWeight: "bold", display: "inline", fontSize: "18px" }}
            >
              useEffect
            </Box>{" "}
            hook for mounting stage to call function getData
          </p>
          <p>check logs to see the reaction</p>
          <p ref={compdidmountAnswer}>getData call: </p>
          <div>{data ? data.map(item=><div key={item.id}>Api call user: {item.id}. {item.name}</div>):"null"}</div>
            
        </Box>
      </Container>
    </div>
  );
}
