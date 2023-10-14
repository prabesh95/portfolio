import React from "react";
import CardComponent from "./CardComponent";

const Cardlist = (props) => {
  return (
    <ul className="flex">
      {props.lists.map((list) => (
        <CardComponent
          key={list.id}
          id={list.id}
          image={list.image}
          title={list.title}
          description={list.description}
        />
      ))}
    </ul>
  );
};

export default Cardlist;
