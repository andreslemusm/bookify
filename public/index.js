//React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Bulma Dependencies
import 'bulma/css/bulma.css';

//FontAwesome Dependencies

//Components Dependencies
import Filters from '../src/scripts/Filters.js';
import Hero from '../src/scripts/Hero.js';
import Hotels from '../src/scripts/Hotels.js';

//Data Dependencies
import { today, hotelsData } from '../src/data/data.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        dateFrom: today, // Proviene del archivo data.js
        dateTo: new Date(today.valueOf() + 86400000),
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: [...hotelsData]
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    console.log(payload);
    this.setState({
      filters: payload,
      //Passing a copy instead of a reference of the hotelsArray
      hotels: [...hotelsData].filter(hotel => {
        return (
          payload.dateFrom.valueOf() >= hotel.availabilityFrom &&
          payload.dateTo.valueOf() <= hotel.availabilityTo &&
          (payload.country === undefined
            ? true
            : hotel.country === payload.country) &&
          (payload.price === undefined ? true : hotel.price == payload.price) &&
          (payload.rooms === undefined
            ? true
            : hotel.rooms <= payload.rooms + 5 &&
              hotel.rooms > payload.rooms - 10)
        );
      })
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
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
