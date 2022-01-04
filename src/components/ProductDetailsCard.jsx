import React from "react";

function ProductDetailsCard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h6>Women {">"} Full set</h6>
          <div className="productDetailsImg">
            <img
              className="img-fluid"
              src="https://randomuser.me/api/portraits/women/82.jpg"
              alt="product"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detailsHeader">
            <h2>Motion Seamless Crop - Musk Pink</h2>
          </div>
          <div className="detailsPrice">
            <h6>15,000</h6>
          </div>
          <div className="detailsDescription">
            <h6>Descripton</h6>
            <p>
              The Kendal set is a collection as vibrant as you are; a collection
              that empowers you to let yourself glow. With performance and
              vibrance equally at the fore of design. It features a cross body
              top, impact sport bra and a leggings.
            </p>
          </div>
          <div className="productSize">
            <h6>Select Size</h6>
          </div>
          <div className="productColor">
            <h6>Select Color</h6>
          </div>
          <div className="productSet">
            <h6>Select Set</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
