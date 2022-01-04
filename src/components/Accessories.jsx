import React from "react";

function Accessories() {
  return (
    <div className="accessoriesContainer">
      <div className="accessoriesImg">
        <img
          className="img-fluid"
          src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="accessories"
        />
      </div>
      <div className="accessoriesText">
        <h1>Accessories</h1>
        <button>Shop</button>
      </div>
    </div>
  );
}

export default Accessories;
