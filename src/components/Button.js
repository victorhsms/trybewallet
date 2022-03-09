import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, id, disabled, onClick, message } = this.props;
    return (
      <button
        name={ name }
        type="button"
        id={ id }
        data-testid={ id }
        disabled={ disabled }
        onClick={ onClick }
      >
        { message }
      </button>
    );
  }
}

Button.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
