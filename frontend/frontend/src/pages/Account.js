import React from "react";
import AddAnnonceButton from "../components/buttons/AddAnnonceButton";
import MainNavbar from "../components/navbar/MainNavbar";
import { useNavigate } from "react-router-dom";

export default function Account() {
  let navigate = useNavigate();

  const displayPage = (e) => {
    e.preventDefault();

    navigate("/addannonce");
  };
  return (
    <div>
      <MainNavbar />
      <AddAnnonceButton txt={"Ajouter une annonce"} func={displayPage} />
    </div>
  );
}
