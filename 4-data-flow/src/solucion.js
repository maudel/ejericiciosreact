////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Flow data up from `Tabs` to let the `App` know what is the active tab.
// - Pass that data down to Flag to display the proper flag
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

let styles = {};

let countries = [
  {
    id: "usa",
    name: "USA",
    description: "Land of the Free, Home of the brave"
  },
  {
    id: "brazil",
    name: "Brazil",
    description: "Sunshine, beaches, and Carnival"
  },
  {
    id: "russia",
    name: "Russia",
    description: "World Cup 2018!"
  }
];

class App extends React.Component {
  state = {
    country: "usa"
  };

  render() {
    return (
      <div>
        <Tabs
          data={countries}
          onChange={tab => {
            this.setState({ country: tab.id });
          }}
        />
        <Flag country={this.state.country} />
      </div>
    );
  }
}

const FLAGS = {
  usa: require("./flags/usa.png"),
  russia: require("./flags/russia.png"),
  brazil: require("./flags/brazil.png")
};

let Flag = ({ country }) => (
  <img
    style={{
      position: "fixed",
      top: 20,
      right: 20,
      border: "5px solid #ccc"
    }}
    width="100"
    alt={`Flag of ${country}`}
    src={FLAGS[country]}
  />
);

class Tabs extends React.Component {
  state = {
    activeIndex: 0
  };

  render() {
    return (
      <div>
        {this.props.data.map((tab, index) => {
          let isActive = index === this.state.activeIndex;
          return (
            <button
              key={index}
              onClick={() => {
                this.props.onChange(
                  this.props.data[index]
                );
                this.setState({ activeIndex: index });
              }}
              style={
                isActive ? styles.activeTab : styles.tab
              }
            >
              {tab.name}
            </button>
          );
        })}

        <div style={styles.panel}>
          {
            this.props.data[this.state.activeIndex]
              .description
          }
        </div>
      </div>
    );
  }
}

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  border: "none",
  font: "inherit",
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

ReactDOM.render(<App />, document.getElementById("root"));
