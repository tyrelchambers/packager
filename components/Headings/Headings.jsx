import React from "react";

export const H1 = (props) => {
  return (
    <h1 className={`text-gray-700 ${props.className ? props.className : ""}`}>
      {props.children}
    </h1>
  );
};

export const H2 = (props) => {
  return (
    <h2
      className={`font-bold text-gray-700 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </h2>
  );
};
