import React, { useEffect, useState } from "react";
import AddAnnonceButton from "../buttons/AddAnnonceButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddAnnonce() {
  const [state, setState] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  const changeHandle = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const addAnnonce = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imgUrl", selectedFile);
    formData.append("title", state.title);
    formData.append("author", localStorage.pseudo);
    formData.append("posterId", localStorage.id);
    formData.append("annonce", state.description);
    formData.append("category", state.category);
    formData.append("price", state.price);

    axios
      .post(`http://localhost:3080/api/announcement`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => console.log(data))
      .then(() => navigate("/main"));
  };

  useEffect(() => {
    if (selectedFile) {
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  }, [selectedFile]);

  return (
    <div className="add-annonce">
      <form onSubmit={addAnnonce}>
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
          onChange={(e) => setState({ ...state, category: e.target.value })}
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
        <label htmlFor="file">Choisissez une image :</label>
        <input type="file" name="file" id="file" onChange={changeHandle} />
        {imageUrl && (
          <div className="img-container">
            <img src={imageUrl} alt="preview de l'image choisi" />
          </div>
        )}
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
