import React, { useState } from "react";
import AddAnnonceButton from "../buttons/AddAnnonceButton";
import axios from "axios";

export default function AddAnnonce() {
  const [state, setState] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
  });

  const [file, setFile] = useState();

  const changeHandle = (e) => {
    setFile(e.target.files[0].name);
  };

  return (
    <div className="add-annonce">
      <form>
        <legend>Votre annonce :</legend>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          name="title"
          id="title"
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
        />
        <label htmlFor="category">Catégorie :</label>
        <select
          name="category"
          id="select-category"
          value={state.category}
          onChange={(e) => ({ ...state, category: e.target.value })}
        >
          <option value="select">Choisissez une catégorie</option>
          <option value="livres">Livres</option>
          <option value="bd">BD</option>
          <option value="comics">Comics</option>
          <option value="mangas">Mangas</option>
          <option value="jeux">Jeu de société/plateau</option>
          <option value="jdr">Jeu de rôle</option>
          <option value="dvd">DVD/VHS</option>
          <option value="figurines">Figurines</option>
          <option value="autres">Autres</option>
        </select>
        <label htmlFor="files">Choisissez une image :</label>
        <input type="file" name="files" id="files" onChange={changeHandle} />
        <div>
          <img src={state.file} alt="" />
        </div>
        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={state.description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
        ></textarea>
        <label htmlFor="price">Prix :</label>
        <div className="price-input">
          <i>€</i>
          <input
            type="number"
            name="price"
            id="price"
            value={state.price}
            onChange={(e) => setState({ ...state, price: e.target.value })}
          />
        </div>
        <AddAnnonceButton txt={"Déposer votre annonce"} />
      </form>
    </div>
  );
}
