import React from "react";
import Header from "./Components/Header";
// import Counter from "./Components/Counter";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Checkout from "./Components/shared/Checkout";
import ProductDetail from "./Components/shared/ProductDetail";
import ExamTest from './Components/ExamTest'
import ExamTestClassStyle from "./Components/ExamTestClassStyle";
import ExamTestQ3 from "./Components/ExamTestQ3";
import ExamTestQ4 from "./Components/ExamTestQ4";
import ExamTestQ6 from "./Components/ExamTestQ6";
function App() {
  return (
    <React.Fragment>
        {/* <Counter /> */}
        {/* <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/:id" element={<ProductDetail/>}/>
          </Routes>
        </BrowserRouter> */}
        <ExamTest />
        <ExamTestClassStyle />
        <ExamTestQ3 />
        <ExamTestQ4 />
        <ExamTestQ6 />
    </React.Fragment>
  );
}

export default App;
