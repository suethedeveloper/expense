import React from "react";
import classes from "./Card.module.css";

const Card = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;