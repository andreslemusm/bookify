//React Dependencies
import React from 'react';

//Components Dependencies
import Filters from './Filters.js';
import Hero from './Hero.js';
import Hotels from './Hotels.js';

//Moment Dependencies
import moment from 'moment';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        dateFrom: '',
        dateTo: '',
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: []
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    //Fetch simulation :V
    setTimeout(() => {
      const data = require('../assets/data.js');
      this.setState({
        hotels: data.hotelsData
      });
    }, 2000);
  }

  handleFilterChange(payload) {
    const data = require('../assets/data.js');
    this.setState({
      filters: payload,
      hotels: data.hotelsData.filter((hotel) => {
        return (
          //Until dateFrom or dateTo take a date value, ignore time availability
          ((payload.dateFrom === '' && payload.dateTo === '') ||
            (moment(payload.dateFrom) >= moment(hotel.availabilityFrom) &&
              moment(payload.dateTo) <= moment(hotel.availabilityTo))) &&
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
