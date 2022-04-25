import React, { useEffect, useState } from "react";
import AddAnnonceButton from "../buttons/AddAnnonceButton";
import FileButton from "../buttons/FileButton";
import trash from "../../assets/icons/trash-can-solid.svg";
import upload from "../../assets/icons/upload-solid.svg";
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
  const [selectedFile2, setSelectedFile2] = useState();
  const [selectedFile3, setSelectedFile3] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [imageUrl2, setImageUrl2] = useState();
  const [imageUrl3, setImageUrl3] = useState();

  const hiddenFileInput = React.useRef(null);
  const hiddenFileInput2 = React.useRef(null);
  const hiddenFileInput3 = React.useRef(null);

  const navigate = useNavigate();

  console.log(selectedFile);
  console.log(imageUrl);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    hiddenFileInput2.current.click();
  };
  const handleClick3 = (e) => {
    e.preventDefault();
    hiddenFileInput3.current.click();
  };

  const changeHandle = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const changeHandle2 = (e) => {
    setSelectedFile2(e.target.files[0]);
  };
  const changeHandle3 = (e) => {
    setSelectedFile3(e.target.files[0]);
  };

  const addAnnonce = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imgUrl1", selectedFile);
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
    if (selectedFile2) {
      setImageUrl2(URL.createObjectURL(selectedFile2));
    }
    if (selectedFile3) {
      setImageUrl3(URL.createObjectURL(selectedFile3));
    }
  }, [selectedFile, selectedFile2, selectedFile3]);

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

        <label htmlFor="file">Choisissez des images :</label>
        <div className="preview">
          <div className="img-container">
            {!imageUrl && (
              <>
                <input
                  type="file"
                  name="file"
                  className="file"
                  ref={hiddenFileInput}
                  onChange={changeHandle}
                />
                <FileButton
                  func={handleClick}
                  txt={"Ajouter une image"}
                ></FileButton>
              </>
            )}
            {imageUrl && (
              <>
                <img src={imageUrl} alt="preview de l'image choisi" />{" "}
                <div className="icon-preview upload">
                  <img
                    src={upload}
                    alt="icone d'un upload"
                    title="Changer l'image"
                  />
                </div>
                <div className="icon-preview trash">
                  <img
                    src={trash}
                    alt="icone d'une poubelle"
                    title="Supprimer l'image"
                  />
                </div>
              </>
            )}
          </div>

          <div className="img-container">
            {!imageUrl2 && (
              <>
                <input
                  type="file"
                  name="file"
                  className="file"
                  ref={hiddenFileInput2}
                  onChange={changeHandle2}
                />
                <FileButton
                  func={handleClick2}
                  txt={"Ajouter une image"}
                ></FileButton>
              </>
            )}
            {imageUrl2 && (
              <>
                <img src={imageUrl2} alt="preview de l'image choisi" />
                <div className="icon-preview upload">
                  <img
                    src={upload}
                    alt="icone d'un upload"
                    title="Changer l'image"
                  />
                </div>
                <div className="icon-preview trash">
                  <img
                    src={trash}
                    alt="icone d'une poubelle"
                    title="Supprimer l'image"
                  />
                </div>
              </>
            )}
          </div>

          <div className="img-container">
            {!imageUrl3 && (
              <>
                <input
                  type="file"
                  name="file"
                  className="file"
                  ref={hiddenFileInput3}
                  onChange={changeHandle3}
                />
                <FileButton
                  func={handleClick3}
                  txt={"Ajouter une image"}
                ></FileButton>
              </>
            )}
            {imageUrl3 && (
              <>
                <img src={imageUrl3} alt="preview de l'image choisi" />{" "}
                <div className="icon-preview upload">
                  <img
                    src={upload}
                    alt="icone d'un upload"
                    title="Changer l'image"
                  />
                </div>
                <div className="icon-preview trash">
                  <img
                    src={trash}
                    alt="icone d'une poubelle"
                    title="Supprimer l'image"
                  />
                </div>
              </>
            )}
          </div>
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
