import React from "react";
import Review from "./Review";
// import { FaGithub } from "react-icons/fa";
import "./Main_3.css";

const Main_3 = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>Our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
};

export default Main_3;
