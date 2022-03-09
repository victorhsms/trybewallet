import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpenses } from '../actions/index';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  addExpense = () => {
    const { expenses, fetchExpensesApi } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const initExpanse = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };

    fetchExpensesApi(initExpanse);

    this.setState({
      value: 0,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currencyList } = this.props;
    return (
      <form>
        <Input
          type="number"
          id="value-input"
          message="Valor: "
          placeholder="ex: 123"
          name="value"
          value={ value }
          onInputChange={ this.handleChange }
        />
        <Input
          type="text"
          id="description-input"
          message="Descrição: "
          placeholder="ex: Alimentação  na faculdade"
          name="description"
          value={ description }
          onInputChange={ this.handleChange }
        />
        <Select
          id="currency-input"
          message="Moeda"
          name="currency"
          options={ currencyList }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          id="method-input"
          message="Método de pagamento: "
          name="method"
          options={ [
            'Dinheiro',
            'Cartão de crédito',
            'Cartão de débito',
          ] }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          id="tag-input"
          message="Categoria:"
          name="tag"
          options={ [
            'Alimentação',
            'Lazer',
            'Trabalho',
            'Transporte',
            'Saúde',
          ] }
          value={ tag }
          onChange={ this.handleChange }
        />
        <Button
          name="add"
          id="button-add"
          message="Adicionar despesa"
          disabled={ false }
          onClick={ this.addExpense }
        />
      </form>
    );
  }
}

FormWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchExpensesApi: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExpensesApi: (initExpenses) => dispatch(fetchExpenses(initExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
