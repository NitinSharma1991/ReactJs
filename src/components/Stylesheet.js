import React from "react";
import "./MyStyleSheet.css";
function Stylesheet(props) {
  const color = props.primary ? "primary" : " ";
  console.log(color);
  return (
    <div>
      <h1 className={`${color} fontExcel`}>StyleSheets</h1>
    </div>
  );
}

export default Stylesheet;
