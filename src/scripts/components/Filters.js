//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components Dependencies
import DateFilter from './DateFilter.js';
import OptionsFilter from './OptionsFilter.js';

//FontAwesome Dependencies
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function Filters(props) {
  return (
    <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
      <div className="navbar-item">
        <DateFilter date={props.filters.dateFrom} icon={fas.faSignInAlt} />
      </div>
      <div className="navbar-item">
        <DateFilter date={props.filters.dateTo} icon={fas.faSignOutAlt} />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={[
            { value: undefined, name: 'Todos los países' },
            { value: 'Argentina', name: 'Argentina' },
            { value: 'Brasil', name: 'Brasil' },
            { value: 'Chile', name: 'Chile' },
            { value: 'Uruguay', name: 'Uruguay' }
          ]}
          selected={props.filters.country}
          icon={fas.faGlobe}
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={[
            { value: undefined, name: 'Cualquier precio' },
            { value: 1, name: '$' },
            { value: 2, name: '$$' },
            { value: 3, name: '$$$' },
            { value: 4, name: '$$$$' }
          ]}
          selected={props.filters.price}
          icon={fas.faDollarSign}
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={[
            { value: undefined, name: 'Cualquier tamaño' },
            { value: 10, name: 'Hotel pequeño' },
            { value: 20, name: 'Hotel mediano' },
            { value: 30, name: 'Hotel grande' }
          ]}
          selected={props.filters.rooms}
          icon={fas.faBed}
        />
      </div>
    </nav>
  );
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired
};
