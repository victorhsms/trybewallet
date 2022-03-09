// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_LIST, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSE_LIST:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.expenseDeleted,
    };
  default:
    return state;
  }
};

export default walletReducer;
