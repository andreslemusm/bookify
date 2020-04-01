//React Dependencies
import React from 'react';

//Components Dependencies
import Filters from './Filters.js';
import Hero from './Hero.js';
import Hotels from './Hotels.js';

const today = new Date();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000),
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: []
    };
  }

  componentDidMount() {
    const data = require('../assets/data.js');
    this.setState({
      hotels: data.hotelsData
    });
  }

  handleFilterChange = (payload) => {
    const data = require('../assets/data.js');
    this.setState({
      filters: payload,
      hotels: data.hotelsData.filter((hotel) => {
        console.log(
          payload.dateFrom.valueOf() >= hotel.availabilityFrom &&
            payload.dateTo.valueOf() <= hotel.availabilityTo &&
            (payload.country === undefined
              ? true
              : hotel.country === payload.country) &&
            (payload.price === undefined
              ? true
              : hotel.price == payload.price) &&
            (payload.rooms === undefined
              ? true
              : hotel.rooms <= payload.rooms + 5 &&
                hotel.rooms > payload.rooms - 10)
        );
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
    console.log(data.hotelsData);
  };

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
