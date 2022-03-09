import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { id, message, name, onChange, value, options } = this.props;
    return (
      <label htmlFor={ id }>
        { message }
        <select
          // O colega Pedro Henrick (https://github.com/PedrHenrick) me ajudou aqui mostrando que o erro do teste era porque eu não tinha colocado um id.
          id={ id }
          data-testid={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {options.length > 0
            ? options.map((option) => (
              <option
                key={ option }
                data-testid={ option }
              >
                { option }
              </option>
            ))
            : null}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
