import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
// import { getDatabase } from "firebase/database";
import {useNavigate} from 'react-router-dom'
import shortenName from "./helper/shortenName";

export default function Header() {
  // const db = getDatabase()
  // console.log()
  const [name,setName] = useState();
  let result;
  useEffect(() => {
     result = onAuthStateChanged(auth, (user) => {
      if (user) {
      console.log(user)
      setName(shortenName(user.email))
      }
      else  
      {
        // console.log(result)
      };
    });
  },[result])
  
  const user = auth.currentUser;

  const navigate = useNavigate()

  return (
    <div className="ui fixed menu">
      <div className="ui container " style={{margin:'8px',alignItems:'center',alignContent:"center"}}>
        <h2 className="ui aligned" style={{marginTop:"auto",marginBottom:'auto'}} onClick={()=>{navigate('/')}} >Fake Shop</h2>
        {/* {user && <button onClick={() => {}}>{user.uid}</button>} */}
       
          <div className="ui buttons" style={{marginLeft:'auto'}}>
            <button className="ui button" onClick={()=>{navigate('/login')}}>{name?`hi ${name}`:'Login'}</button>
            {!name&&
              <button className="ui button" onClick={()=>{navigate('/signup')}}>Signup</button>
            }
            {name&&
              <button className="ui button" onClick={()=>{auth.signOut();setName('')}}>logout</button>
            }
            <div class="ui label button" style={{marginLeft:'auto'}} onClick={()=>{navigate('/checkout')}}>
              <i class="shopping cart icon"></i> 0
            </div>
        
          </div>
      </div>
    </div>
  );
}
