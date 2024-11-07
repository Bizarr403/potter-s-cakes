import React from "react";
import "../App.css";
function Links(props) {
  return <a href={props.href}>{props.name}</a>;
}

export default Links;
