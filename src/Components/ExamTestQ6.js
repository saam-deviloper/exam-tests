import { Box, Container } from '@mui/system';
// import { makeStyles } from '@material-ui/core';
import React from 'react'

export default function ExamTestQ6() {
    //mui styles not compatible with react 18.

    //below solution works with react 17
    
    //solution 1:
    // const useStyles = makeStyles(theme => ({
    //     root: {
    //      backgroundColor:'blue'
    //     },
    //   }));
    //   const classes = useStyles();


    // soluion 2(new):
        //const useStyles = makeStyles({
        //     root: {
        //      backgroundColor:'blue'
        //     },
        //   });
        //   const classes = useStyles();

  return (
    <div>
        <Container>
            <Box sx={{backgroundColor:'yellow',m:1}}>
            <h1>Question6</h1>
            </Box>
            {/* make style */}
            <Box>
                {/* <div className={classes.root}>I am the specific child</div> */}
            </Box>
        </Container>
    </div>
  )
}
