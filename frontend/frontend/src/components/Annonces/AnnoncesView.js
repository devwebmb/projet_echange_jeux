import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../pagination/Pagination";

export default function AnnoncesView() {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [annoncesPerPage] = useState(12);

  useEffect(() => {
    setLoading(true);
    axios(`http://localhost:3080/api/announcement`).then((data) => {
      let newArr = data.data.data;
      setAnnonces(newArr);
      setLoading(false);
    });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * annoncesPerPage;
  const indexOfFirstPost = indexOfLastPost - annoncesPerPage;
  const currentAnnonces = annonces.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // <div className="annonces-view">
    //   {annonces.map((item) => {
    //     return (
    //       <div>
    //         <Card key={item.id}>
    //           <div className="top-img">
    //             <img src={item.imgUrl} alt="photo de l'annonce" />
    //           </div>
    //           <hr />
    //           <h2>{item.title}</h2>
    //           <p>{item.price} €</p>
    //         </Card>
    //       </div>
    //     );
    //   })}
    // </div>
    // );
    <div>
      <Card annonces={currentAnnonces} loading={loading} />
      <Pagination
        annoncesPerPage={annoncesPerPage}
        totalAnnonces={annonces.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
