import React from "react";

export const ProductCard = ({ product }) => {
  const { id, title, description, thumbnail } = product;
  return (
    <div className="parent-card">
      <div className="img-container">
        <img src={thumbnail} className="card-image" />
      </div>
      <div className="right-card">
        <h4>{title}</h4>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
};
