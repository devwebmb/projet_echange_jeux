import React from "react";

// export default function Card(props) {
//   return <div className="card">{props.children}</div>;
// }

export default function Card({ annonces, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="annonces-view">
      {annonces.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="top-img">
              <img src={item.imgUrl} alt="photo de l'annonce" />
            </div>
            <hr />
            <h2>{item.title}</h2>
            <p>{item.price} €</p>
          </div>
        );
      })}
    </div>
  );
}
