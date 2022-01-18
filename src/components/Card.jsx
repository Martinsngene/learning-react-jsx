import React from "react";

function Card({ name, title, src }) {
  return (
    <div>
      <div className="card">
        <img src={src} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{title}</p>
        </div>
        {/* <input type="text" onChange={onInputChange} value={name} /> */}
      </div>
      <div>
        <button
          className="btn btn-danger"
          // onClick={changeMe}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Card;
