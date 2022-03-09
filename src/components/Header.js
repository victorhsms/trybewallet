import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <p>
            Email logado:
            <span data-testid="email-field">
              { email }
            </span>
          </p>
          <p>
            {' Despesa Total: R$ '}
            <span data-testid="total-field">
              { expenses
                .reduce((acc, expanse) => acc + parseFloat(expanse
                  .exchangeRates
                  .LTC
                  .ask), 0.0) }
            </span>
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
