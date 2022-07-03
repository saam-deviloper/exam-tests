import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
export default function Login() {
  const navigate = useNavigate();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [name, setName] = useState();

  //login Handler
  const loginHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(
      auth,
      // usernameInput.current.value,
      // passwordInput.current.value
      'infoo@gmail.com',
      '123456'
    )
      .then((userCred) => {
        // const user = userCred.user;
        setName(userCred.user);
        // console.log(user);
        onAuthStateChanged(auth, (user) => {
          if(user){
            // alert('ok',user)
          }
          // else alert('not ok')
        });
        navigate('/')
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: "1",
        }}
      >
        <form action="#">
          <h2 className="ui header centered">Login form</h2>
          <div className="ui  input" style={{ width: "400px" }}>
            <input
              type="text"
              className="ui input large"
              placeholder="email"
              // value='infoo@gmail.com'
              ref={usernameInput}
            />
          </div>
          <br />
          <div className="ui input" style={{ width: "100%" }}>
            <input
              type="password"
              className="ui input large"
              placeholder="password"
              // value='123456'
              ref={passwordInput}
            />
          </div>
          <br />
          <button
            className="ui button animated fade"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={loginHandler}
          >
            <div className="visible content">Login</div>
            <div className="hidden content">with Google</div>
          </button>
          <button
            className="ui button animated fade"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            <div className="visible content">
              <i className="google green icon"></i>Signup
            </div>
            <div className="hidden content">with Google</div>
          </button>
        </form>
      </div>
    </>
  );
}
