import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function DateFilter(props) {
  function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if (month.length === 2) month = '0' + month;
    if (day.length === 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  return (
    <div className="field">
      <div className="control has-icons-left">
        <input
          className="input"
          type="date"
          defaultValue={formatDate(props.date)}
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      </div>
    </div>
  );
}

DateFilter.propTypes = {
  icon: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired
};
