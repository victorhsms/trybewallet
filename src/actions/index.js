// Coloque aqui suas actions
import getCurrencyApi from '../services/currencyAPI';

export const EMAIL_USER = 'EMAIL_USER';
export const EXPENSE_LIST = 'EXPENSE_LIST';

export const setEmail = (emailUser) => ({
  type: EMAIL_USER,
  email: emailUser,
});

const setExpenses = (expense) => ({
  type: EXPENSE_LIST,
  expenses: expense,
});

export const fetchExpenses = (expenses) => (dispatch) => {
  getCurrencyApi().then((response) => {
    const finalExpanse = {
      ...expenses,
      exchangeRates: response,
    };
    dispatch(setExpenses(finalExpanse));
  });
};
