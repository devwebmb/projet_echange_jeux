import React from "react";
import AnnoncesView from "../components/Annonces/AnnoncesView";
import AddAnnonceButton from "../components/buttons/AddAnnonceButton";
import MainNavbar from "../components/navbar/MainNavbar";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const displayPage = (e) => {
    e.preventDefault();

    navigate("/addannonce");
  };
  return (
    <div className="main-page">
      <MainNavbar />
      <AddAnnonceButton txt={"Ajouter une annonce"} func={displayPage} />
      <AnnoncesView />
    </div>
  );
}
