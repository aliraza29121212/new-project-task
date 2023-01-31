import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "../Project4/Main_4.css";

const Main_4 = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Main_4;
