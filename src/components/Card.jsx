import React from "react";

function Card({ name, title, src, onDelete }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="card">
        <img src={src} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{title}</p>
        </div>
        <button className="btn btn-danger" onClick={onDelete}>
          delete
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
