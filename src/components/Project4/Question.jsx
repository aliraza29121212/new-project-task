import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header
        className="d-flex"
        style={{ position: "relative", padding: "15px 0px" }}
      >
        <h4>{title}</h4>
        <span
          className=""
          style={{ position: "absolute", right: "0" }}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <BiMinus /> : <BsPlusLg />}
        </span>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
