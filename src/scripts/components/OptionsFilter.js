//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OptionsFilter(props) {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={{ width: '100%' }}>
          <select name={props.selected}>
            {props.options.map(option => {
              return (
                <option key={option.name} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="icon is-small is-left">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </div>
    </div>
  );
}

OptionsFilter.propTypes = {
  options: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
