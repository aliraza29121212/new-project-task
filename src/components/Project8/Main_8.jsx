import React, { useState } from "react";
import "../Project8/Main_8.css";
import data from "./data";

const Main_8 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 0;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section center">
      <h3>Tired of boring lorem ipsum</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          min="0"
          max="8"
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <div className="my-btn" type="submit" onClick={handleSubmit}>
          Generate
        </div>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default Main_8;
