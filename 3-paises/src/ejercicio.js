import React from "react";
import ReactDOM from "react-dom";

let styles = {};

let countries = [
  {
    id: 1,
    name: "USA",
    description: "Land of the Free, Home of the brave"
  },
  {
    id: 2,
    name: "Brazil",
    description: "Sunshine, beaches, and Carnival"
  },
  {
    id: 3,
    name: "Russia",
    description: "World Cup 2018!"
  }
];

class Tabs extends React.Component {
  render() {
    return (
      <div>
        <button style={styles.activeTab}>
          Active Tab
        </button>
        <button style={styles.tab}>Inactive tab</button>

        <div style={styles.panel}>Panel</div>
      </div>
    );
  }
}

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  font: "inherit",
  border: "none",
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

ReactDOM.render(
  <Tabs data={countries} />,
  document.getElementById("root")
);
