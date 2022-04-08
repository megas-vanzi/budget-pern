import {
  AUTH_LOGIN_ACTION,
  AUTH_LOGOUT_ACTION,
  AUTH_REGISTER_ACTION,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_SUCCESS,
  GET_EXPENSE,
  GET_EXPENSE_SUCCESS,
  GET_EXPENSE_ERROR,
  ADD_EXPENSE,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_ERROR,
  EDIT_EXPENSE_SET,
  EDIT_EXPENSE,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_ERROR,
  DELETE_EXPENSE,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_ERROR,
} from "./actions";

const initialState = {
  auth: {},
  expenses: {},
  expenseToEdit: null,
  error: null,
  message: null,
};

function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_ACTION:
      return {
        ...state,
      };
    case AUTH_LOGOUT_ACTION:
      return {
        ...state,
      };
    case AUTH_REGISTER_ACTION:
      return {
        ...state,
      };
    case AUTH_ACTION_ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case AUTH_ACTION_SUCCESS:
      return {
        ...state,
        error: null,
        message: null,
        auth: action.payload,
      };

    case GET_EXPENSE:
      return {
        ...state,
      };
    case GET_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case GET_EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
      };
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case ADD_EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_EXPENSE_SET:
      return {
        ...state,
        expenseToEdit: action.payload,
      };
    case EDIT_EXPENSE:
      return {
        ...state,
      };
    case EDIT_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        expenseToEdit: null,
      };
    case EDIT_EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
      };
    case DELETE_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default expenseReducer;
