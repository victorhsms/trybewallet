import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { placeholder, name, message, id, type, value, onInputChange } = this.props;
    return (
      <label htmlFor={ id }>
        { message }
        <input
          type={ type }
          id={ id }
          name={ name }
          placeholder={ placeholder }
          data-testid={ id }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
