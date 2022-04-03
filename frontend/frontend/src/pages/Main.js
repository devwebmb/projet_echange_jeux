import React from "react";
import AddAnnonceButton from "../components/buttons/AddAnnonceButton";
import MainNavbar from "../components/navbar/MainNavbar";
import AddAnnonce from "../components/Annonces/AddAnnonce";

export default function Main() {
  return (
    <div>
      <MainNavbar />
      <AddAnnonceButton txt={"Ajouter une annonce"} />
      <AddAnnonce />
    </div>
  );
}
