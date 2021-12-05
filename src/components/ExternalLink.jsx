import React from "react";

export default function (props) {
  return (
    <a className="block" href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}
