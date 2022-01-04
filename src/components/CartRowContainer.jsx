import React from "react";
import SingleCartRow from "./SingleCartRow";

function CartRowContainer() {
  return (
    <div className="cartItemsContainer">
      <div className="cartContainerHeader">
        <div className="row">
          <div className="col-md-6">
            <h5>Product</h5>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h5>Price</h5>
              </div>
              <div className="col-md-4">
                <h5>Quantity</h5>
              </div>
              <div className="col-md-4">
                <h5>Total</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SingleCartRow />
      <SingleCartRow />
      <SingleCartRow />
      <SingleCartRow />
    </div>
  );
}

export default CartRowContainer;
