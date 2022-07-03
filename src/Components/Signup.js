import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

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
        <form className="ui fluid form">
          <h2 className="ui header centered">signup form</h2>
          <div className="ui  input" style={{ width: "400px" }}>
            <input
              type="text"
              className="ui input large"
              placeholder="username"
            />
          </div>
          <br />
          <div className="ui  input" style={{ width: "400px" }}>
            <input type="text" className="ui input large" placeholder="email" />
          </div>
          <br />
          <div className="ui input" style={{ width: "100%" }}>
            <input
              type="password"
              className="ui input large"
              placeholder="password"
            />
          </div>
          {/* <br /> */}
          
          <div className="ui input black" style={{ width: "100%" }}>
            <input
              type="password"
              className="ui input large"
              placeholder="re-enter password"
            />
          </div>
          <br />
          <button
            className="ui button animated fade"
            style={{ width: "100%", marginTop: "10px" }}
          >
            <div className="visible content">
              <i className="google green icon"></i>Signup
            </div>
            <div className="hidden content">with Google</div>
          </button>
          <button
            className="ui button animated fade"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            <div className="visible content">Login</div>
            <div className="hidden content">with Google</div>
          </button>
        </form>
      </div>
    </>
  );
}
