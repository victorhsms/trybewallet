// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_USER } from '../actions/index';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_USER:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default userReducer;
