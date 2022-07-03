import { Button, FormControl, InputLabel, NativeSelect, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestEdit } from "../Redux/Person/personAction";

export default function ExamTestQ4() {
  //change initial values
  const values= {id:2,name:'jalal',age:221}
  
  useEffect(() => {
    dispatch(requestEdit("REQUEST_EDIT", values)); //call action to edit specified payload.id
  }, []);
  const firstData = useSelector((state) => state.personData); //get array from redux
  const dispatch = useDispatch(); //redux hook to call action
  

  return (
    <>
      <Container>
        <Box sx={{ backgroundColor: "peru",p:2}}>
          {/* {firstData && console.log(firstData)} */}
          <h1>Question4</h1>
          <pre> const initialState =
           id: 2, name: "ali", age: 25 
           </pre>
           <p>id:2 change to name:jalal, age:221 </p>
          {firstData && firstData.map((item)=>(<div key={item.id}>id:{item.id}--   Name : {item.name}  -- Age: {item.age}</div>))}
        </Box>
      </Container>
    </>
  );
}
