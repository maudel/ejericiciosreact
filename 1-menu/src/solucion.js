
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import sortBy from "sort-by";

const DATA = {
  title: "Menu",
  items: [
    { id: 1, name: "tacos", type: "mexican" },
    { id: 2, name: "burrito", type: "mexican" },
    { id: 3, name: "tostada", type: "mexican" },
    { id: 4, name: "mushy peas", type: "english" },
    { id: 5, name: "fish and chips", type: "english" },
    { id: 6, name: "black pudding", type: "english" }
  ]
};

const element = (
  // pon tu codigo
  <div>
    <h1>{DATA.title}</h1>
    <ul>
      {DATA.items
        .filter(item => item.type === "mexican")
        .sort(sortBy("name"))
        .map(item => <li>{item.name}</li>)}
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
