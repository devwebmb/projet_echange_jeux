import React from "react";

export default function AddAnnonceButton(props) {
  return (
    <div className="add-annonce-btn">
      <button onClick={props.func}>{props.txt}</button>
    </div>
  );
}
