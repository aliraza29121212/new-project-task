import React, { useState } from "react";
import Data from "./Data";
import List from "./List";
import "./main1.css";

const Main1 = () => {
  const [value, setValue] = useState(Data);

  return (
    <main>
      <section className="container">
        <h3>(0) birthday today</h3>
        <List value={value} />
        <button onClick={() => setValue([])}>Clear All</button>
      </section>
    </main>
  );
};

export default Main1;
