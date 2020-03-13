//React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
//FontAwesome Dependencies
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Hero } from '../src/scripts/components/Hero.js';
//Data Dependencies
import { today } from '../src/scripts/data.js';
import { DateFilter } from '../src/scripts/components/DateFilter.js';

function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: 'Mexico',
    price: 20,
    rooms: 0
  };

  return (
    <div>
      <Hero filters={filters} />
      <DateFilter date={filters.dateFrom} icon={fas.faSignInAlt} />
      <DateFilter date={filters.dateTo} icon={fas.faSignOutAlt} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
