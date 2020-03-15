//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components Dependencies
import DateFilter from './DateFilter.js';
import OptionsFilter from './OptionsFilter.js';

//FontAwesome Dependencies
import { fas } from '@fortawesome/free-solid-svg-icons';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOptionChange(event) {
    let payload = this.props.filters;
    payload[event.target.name] = event.target.value;

    this.props.onFilterChange(payload);
  }

  render() {
    return (
      <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateFrom}
            icon={fas.faSignInAlt}
            name
          />
        </div>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateTo}
            icon={fas.faSignOutAlt}
            name
          />
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
            selected={this.props.filters.country}
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
            selected={this.props.filters.price}
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
            selected={this.props.filters.rooms}
            icon={fas.faBed}
          />
        </div>
      </nav>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired
};
