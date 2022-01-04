import React from "react";

function CardFooter() {
  return (
    <div>
      <div className="row cardFooterItemOne align-items-center justify-content-center">
        <div className="col-md-6">
          <p>Subtotal</p>
          <h6>
            Shipping <small>(Nigeria)</small>
          </h6>
          <a href="/">International</a>
        </div>
        <div className="col-md-6">
          <p>40,000</p>
          <p>2,300</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h6>Total</h6>
        </div>
        <div className="col-md-6">
          <h6>42,300</h6>
          <div>
            <button className="proceed">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFooter;
