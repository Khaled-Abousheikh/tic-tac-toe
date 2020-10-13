import React from "react";

const style = {
  background: "white",
  border: "2px solid pink",
  fontSize: "100px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  color: "skyblue",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
