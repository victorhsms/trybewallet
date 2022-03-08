import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import setEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailValue: '',
      passwordValue: '',
      buttonDisabled: true,
      renderPage: true,
    };
  }

  componentDidUpdate() {
    this.buttonConditions();
  }

  buttonConditions = () => {
    const { emailValue, passwordValue, buttonDisabled } = this.state;
    const LIMIT_INDEX_OF = -1;
    const LIMIT_PASSWORD = 6;
    const validateEmail = [
      emailValue.length >= 1,
      emailValue.indexOf('@') !== LIMIT_INDEX_OF,
      emailValue.indexOf('.') !== LIMIT_INDEX_OF,
      emailValue.indexOf('.') !== emailValue.length - 1,
    ];

    const validate = [
      validateEmail.every((condition) => condition),
      passwordValue.length >= LIMIT_PASSWORD,
    ];

    const resultValidation = validate.every((condition) => condition);

    if (buttonDisabled === true && resultValidation) {
      this.setState({
        buttonDisabled: false,
      });
    } else if (buttonDisabled === false && !resultValidation) {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  buttonRedirection = () => {
    const { emailValue } = this.state;
    const { dispatch } = this.props;
    dispatch(setEmail(emailValue));
    this.setState({
      renderPage: false,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { emailValue, passwordValue, buttonDisabled, renderPage } = this.state;
    return (
      <div>
        { renderPage
          ? (
            <form>
              <Input
                type="email"
                id="email-input"
                message="Please, enter your email: "
                placeholder="email@email.com"
                name="emailValue"
                value={ emailValue }
                onInputChange={ this.handleChange }
              />
              <Input
                type="password"
                id="password-input"
                message="Please, enter your password: "
                placeholder="xxxxxx"
                name="passwordValue"
                value={ passwordValue }
                onInputChange={ this.handleChange }
              />
              <Button
                name="submit"
                id="button-login"
                message="Entrar"
                disabled={ buttonDisabled }
                onClick={ this.buttonRedirection }
              />
            </form>
          )
          : <Redirect to="/carteira" />}
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps)(Login);
