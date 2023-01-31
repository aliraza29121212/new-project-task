import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main1 from "./components/Project1/Main1";
import Main_2 from "./components/project2/Main_2";
import Main_3 from "./components/Project3/Main_3";
import Main_4 from "./components/Project4/Main_4";
import Main_5 from "./components/Project5/Main_5";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main1 />} />
          <Route exact path="/main2" element={<Main_2 />} />
          <Route exact path="/main3" element={<Main_3 />} />
          <Route exact path="/main4" element={<Main_4 />} />
          <Route exact path="/main5" element={<Main_5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
