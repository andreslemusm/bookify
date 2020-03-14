//React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Bulma Dependencies
import 'bulma/css/bulma.css';

//FontAwesome Dependencies

//Components Dependencies
import Filters from '../src/scripts/components/Filters.js';
import Hero from '../src/scripts/components/Hero.js';

//Data Dependencies
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
      <Filters filters={filters} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
