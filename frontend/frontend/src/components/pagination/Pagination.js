import React from "react";

export default function Pagination({
  annoncesPerPage,
  totalAnnonces,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAnnonces / annoncesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
