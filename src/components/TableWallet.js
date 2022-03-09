import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

class TableWallet extends Component {
  getConvertedValue = (expense) => {
    const { value, currency, exchangeRates } = expense;
    const quotation = parseFloat(exchangeRates[currency].ask);
    const valueConverted = value * quotation;
    return valueConverted.toFixed(2);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ parseFloat(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>{ this.getConvertedValue(expense)}</td>
              <td>Real</td>
              <td>
                <Button
                  name="edit"
                  id="edit-btn"
                  disabled={ false }
                  message="Editar"
                  onClick={ () => {} }
                />
                <Button
                  name="delete"
                  id="delete-btn"
                  disabled={ false }
                  message="Deletar"
                  onClick={ () => {} }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableWallet);
