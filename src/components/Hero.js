//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Moment Dependencies
import moment from 'moment';

export default function Hero(props) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Bookify</h1>
          <h2 className="subtitle">
            <strong>Hoteles</strong>{' '}
            {moment(props.filters.dateFrom).isValid()
              ? `desde el ${moment(props.filters.dateFrom).format(
                  'dddd, D of MMMM YYYY'
                )}`
              : ''}
            {moment(props.filters.dateTo).isValid()
              ? `, hasta el ${moment(props.filters.dateTo).format(
                  'dddd, D of MMMM YYYY'
                )}`
              : ''}
            {props.filters.country != undefined &&
              ` en ${props.filters.country}`}
            {props.filters.price != undefined &&
              ` por $${props.filters.price} la noche`}
            {props.filters.rooms != undefined &&
              ` de hasta ${props.filters.rooms} habitaciones.`}
          </h2>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  filters: PropTypes.object.isRequired
};
