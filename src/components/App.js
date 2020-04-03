//React Dependencies
import React from 'react';

//Components Dependencies
import Filters from './Filters.js';
import Hero from './Hero.js';
import Hotels from './Hotels.js';

//Moment Dependencies
import moment from 'moment';
import 'moment/locale/es';
//Set locale to spanish
moment.locale('es');

export default class App extends React.Component {
  constructor() {
    super();
    //Initialize state
    this.state = {
      filters: {
        dateFrom: '',
        dateTo: '',
        country: undefined,
        price: undefined,
        rooms: undefined,
      },
      hotels: [],
    };
    //Bind event handler
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  //Fetch simulation :V
  fetchData() {
    this.timeoutId = setTimeout(() => {
      const data = require('../assets/data.js');
      this.setState({
        hotels: data.hotelsData,
      });
    }, 1500);
  }

  //Fetch abort simulation :V
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  handleFilterChange(newFilters) {
    //I'm a lazy person, that's why I didnt use fetchData() here, but imagine everytime I call this method that would the case.
    const data = require('../assets/data.js');
    this.setState({
      filters: newFilters,
      hotels: data.hotelsData.filter((hotel) => {
        return (
          //Until dateFrom or dateTo take a date value, ignore time availability
          ((newFilters.dateFrom === '' && newFilters.dateTo === '') ||
            (moment(newFilters.dateFrom) >= moment(hotel.availabilityFrom) &&
              moment(newFilters.dateTo) <= moment(hotel.availabilityTo))) &&
          (newFilters.country === undefined
            ? true
            : hotel.country === newFilters.country) &&
          (newFilters.price === undefined
            ? true
            : hotel.price == newFilters.price) &&
          (newFilters.rooms === undefined
            ? true
            : hotel.rooms <= newFilters.rooms + 5 &&
              hotel.rooms > newFilters.rooms - 10)
        );
      }),
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
