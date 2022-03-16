import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostAnnonce = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const addAnnonce = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("annonce", description);
    formData.append("price", price);
    formData.append("imgUrl", selectedFile);
    formData.append("posterId", window.localStorage.id);
    formData.append("author", window.localStorage.pseudo);
    console.log(formData);

    axios
      .post(`http://localhost:3080/api/announcement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      })
      .then(() => alert("Votre annonce a bien été enregistrée."));
    navigate("/");
  };

  return (
    <div className="add-annonce">
      <form onSubmit={addAnnonce}>
        <legend>Déposer votre annonce : </legend>
        <label htmlFor="title">Titre : </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="category">Catégorie :</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choisissez une catégorie</option>
          <option value="livre">Livres</option>
          <option value="bd">Bandes déssinées</option>
          <option value="comics">Comics</option>
          <option value="manga">Mangas</option>
          <option value="figurine">Figurines</option>
          <option value="jeu">Jeux/jouets</option>
          <option value="affiche">Affiches/Posters</option>
          <option value="autre">Autre</option>
        </select>
        <label htmlFor="image">Ajouter une image :</label>
        <input type="file" name="image[]" id="image" onChange={onSelectFile} />
        {selectedFile ? (
          <div id="imgPreview">
            <img src={preview}></img>
          </div>
        ) : (
          <p>Aucune image sélectionnée.</p>
        )}
        <label htmlFor="annonce">Description :</label>
        <textarea
          name="annonce"
          id="annonce"
          placeholder="Entrez votre description"
          rows="10"
          cols="10"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="price">Prix (en €) :</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="Déposer l'annonce" />
      </form>
    </div>
  );
};

export default PostAnnonce;
