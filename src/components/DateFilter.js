//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Moment Dependencies
import moment from 'moment';

export default function DateFilter(props) {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input
          className="input"
          type="date"
          //Trigger the handleOptionChange method in the Filters component
          onChange={(newDate) => props.onDateChange(newDate)}
          value={
            moment(props.date).isValid()
              ? moment(props.date).format('YYYY-MM-DD')
              : ''
          }
          name={props.name}
          min={moment().format('YYYY-MM-DD')}
          max={moment()
            .add(40, 'day')
            .format('YYYY-MM-DD')}
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
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired
};
