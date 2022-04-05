import React from "react";
import AnnoncesView from "../components/Annonces/AnnoncesView";
import AddAnnonceButton from "../components/buttons/AddAnnonceButton";
import MainNavbar from "../components/navbar/MainNavbar";

export default function Main() {
  return (
    <div className="main-page">
      <MainNavbar />
      <AddAnnonceButton txt={"Ajouter une annonce"} />
      <AnnoncesView />
    </div>
  );
}
