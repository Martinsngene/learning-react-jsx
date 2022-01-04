import React from "react";

function ProductCard({ productName, price }) {
  return (
    <div className="productContainer">
      <div className="productImg">
        <img
          className="img-fluid"
          src="https://randomuser.me/api/portraits/women/82.jpg"
          alt="product figure"
        />
      </div>

      <div className="productNameContainer p-1">
        <p>{productName}</p>
      </div>
      <div className="productPriceContainer">
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
