import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.css";
import Main1 from "./Project1/Main1";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main1 />} />
          {/*  <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
