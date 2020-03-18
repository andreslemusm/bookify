//React Dependencies
import React from "react";
import ReactDOM from "react-dom";

//Bulma Dependencies
import "bulma/css/bulma.css";

//FontAwesome Dependencies

//Components Dependencies
import Filters from "../src/scripts/components/Filters.js";
import Hero from "../src/scripts/components/Hero.js";
import Hotels from "../src/scripts/components/Hotels.js";

//Data Dependencies
import { today, hotelsData } from "../src/scripts/data.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        dateFrom: today, // Proviene del archivo data.js today.valueOf() + 86400000
        dateTo: new Date(),
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: hotelsData
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload
    });
  }

  render() {
    return (
      <div>
        <Hero filters={this.state.filters} />
        <Filters
          filters={this.state.filters}
          //Passing the function to the child component to allow it trigger changes in the state
          onFilterChange={this.handleFilterChange}
        />
        <Hotels hotels={hotels} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
