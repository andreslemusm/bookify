//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export default function StarsTag(props) {
  const dollarSigns = [1, 2, 3, 4];
  return (
    <div className="control">
      <div className="tags">
        <span className="tag is-medium is-info">
          {dollarSigns.map((star) => {
            return (
              <FontAwesomeIcon
                key={star}
                icon={faDollarSign}
                style={
                  star > props.stars
                    ? { margin: '0 .125em', opacity: '.25' }
                    : { margin: '0 .125em' }
                }
              />
            );
          })}
        </span>
      </div>
    </div>
  );
}

StarsTag.propTypes = {
  stars: PropTypes.number.isRequired,
};
