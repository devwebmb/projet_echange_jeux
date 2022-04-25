import React, { useEffect, useState } from "react";
import AddAnnonceButton from "../components/buttons/AddAnnonceButton";
import MainNavbar from "../components/navbar/MainNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const [userAnnonces, setUserAnnonces] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios(`http://localhost:3080/api/announcement`).then((data) => {
      let annonces = data.data.data;
      const annoncesFilter = annonces.filter((el) => el.posterId == id);
      setUserAnnonces(annoncesFilter);
    });
  }, []);

  console.log(userAnnonces);

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
