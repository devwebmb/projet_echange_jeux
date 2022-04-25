import React from "react";

export default function FileButton(props) {
  return (
    <div className="file-btn">
      <button onClick={props.func}>{props.txt}</button>
    </div>
  );
}
