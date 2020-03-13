import React from 'react';
import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { Hero } from '../src/scripts/components/Hero.js';
import { today } from '../src/scripts/data.js';

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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
