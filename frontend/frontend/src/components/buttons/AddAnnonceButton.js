import React from "react";

export default function AddAnnonceButton(props) {
  return (
    <div className="add-annonce-btn">
      <button>{props.txt}</button>
    </div>
  );
}
