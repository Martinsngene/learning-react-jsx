import React from "react";

function Card({ name, title, changeMe }) {
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{title}</p>
        </div>
      </div>
      <div>
        <button className="btn btn-success" onClick={changeMe}>
          click me 2
        </button>
      </div>
    </div>
  );
}

export default Card;
