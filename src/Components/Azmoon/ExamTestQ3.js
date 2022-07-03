import { Container,Box } from '@mui/system';
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { fetchUsers } from '../Redux/Users/usersAction';
import { useDispatch,useSelector } from 'react-redux';
import { decrease, increase } from '../Redux/Counter/counterAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;

export default function ExamTestQ3() {
  //getData from Redux Store
  // 1.create store => action & reducer => use react/redux Hooks
  // like useSelector() & useDispatch() to call & getData

  useEffect(()=>{
      dispatch(fetchUsers());  //we define many action & a func to call them
             //in three stage >> request to api >> successRequest >> failureRequest
    },[])
    const Data = useSelector(State=>State.usersData); //getdata 
    const dispatch = useDispatch(); //dispatch 

    const stateCounter = useSelector(state=>state.counter.counter);
    const dispatchCounter = useDispatch();

    useEffect(()=>{
        console.log('counterNumber Changed')
        const notify = () => toast.info("StateCounter Changed!");
        notify();
    },[stateCounter])

    const increaseHandler =()=>{     //increase counter handler
        dispatchCounter(increase())
    }
    const decreaseHandler =()=>{     //decrease counter handler
        dispatchCounter(decrease()) //action imported from redux-counter-action
    }
    return (
    <>
        <Container>
            <Box sx={{m:2,backgroundColor:"grey",p:2}}>
                <h1>3.a) How we call data from Redux Store(some users data)</h1>
                <h3>{Data.loading ? "Loading ": Data.users.map(item=><p key={item.id}> {item.id}.{item.name}</p>)}</h3>
                
                
                
                <h1>3.b) do something when data changed with another state</h1>
                <Button variant="contained" color='error' onClick={decreaseHandler}>decrease-</Button>
                 {<h2>{stateCounter}</h2>}
                <Button variant="contained" color='success' onClick={increaseHandler}>increase+</Button>
                <p>when state change,notification show in </p>
                <ToastContainer 
                  position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Box>
        </Container>
    </>
  );
}
