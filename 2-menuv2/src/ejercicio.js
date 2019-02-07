
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import sortBy from "sort-by";

let items = [
  { id: 1, name: "tacos", type: "mexican", price: 6 },
  { id: 2, name: "burrito", type: "mexican", price: 9 },
  { id: 3, name: "tostada", type: "mexican", price: 8 },
  {
    id: 4,
    name: "mushy peas",
    type: "english",
    price: 3
  },
  {
    id: 5,
    name: "fish and chips",
    type: "english",
    price: 12
  },
  {
    id: 6,
    name: "black pudding",
    type: "english",
    price: 12
  }
];

ReactDOM.render(
  <div>
    <h1>Menu</h1>
    <ul>
      {items.sort(sortBy("name")).map(item => (
        <li>
          {item.name} - <small>${item.price}</small>
        </li>
      ))}
    </ul>
  </div>,
  document.getElementById("root")
);
