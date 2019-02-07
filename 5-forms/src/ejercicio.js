
import React, { useState } from "react";
import ReactDOM from "react-dom";
import serializeForm from "form-serialize";

function CheckoutForm() {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <fieldset>
          <legend>Billing Address</legend>
          <p>
            <label>
              Billing Name: <input type="text" />
            </label>
          </p>
          <p>
            <label>
              Billing State:{" "}
              <input type="text" size="2" />
            </label>
          </p>
        </fieldset>

        <br />

        <fieldset>
          <label>
            <input type="checkbox" /> Same as billing
          </label>
          <legend>Shipping Address</legend>
          <p>
            <label>
              Shipping Name: <input type="text" />
            </label>
          </p>
          <p>
            <label>
              Shipping State:{" "}
              <input type="text" size="2" />
            </label>
          </p>
        </fieldset>

        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

ReactDOM.render(
  <CheckoutForm />,
  document.getElementById("root")
);
