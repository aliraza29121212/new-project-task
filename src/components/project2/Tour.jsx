import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeFunc }) => {
  const [readmore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-black "
            style={{ fontWeight: "bolder" }}
            onClick={() => setReadMore(!readmore)}
          >
            {readmore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeFunc(id)}>
          Not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
