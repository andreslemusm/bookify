//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(event) {
    this.props.onDateChange(event);
  }
  formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if (month.length === 2) month = '0' + month;
    if (day.length === 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  render() {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="date"
            //Trigger the onChange event in the Filters component
            onChange={this.handleDateChange}
            defaultValue={this.formatDate(this.props.date)}
            name={this.props.name}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={this.props.icon} />
          </span>
        </div>
      </div>
    );
  }
}
DateFilter.propTypes = {
  icon: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired
};
