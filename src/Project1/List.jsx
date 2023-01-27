import React from "react";

const List = ({ value }) => {
  return (
    <div>
      {value.map((data) => {
        const { id, name, age, image } = data;
        return (
          <article key={id} className="person">
            <img src={image} alt="name" />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
