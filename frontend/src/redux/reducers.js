import {
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
  expenses: [],
  error: null,
  expenseToEdit: null,
};

function expenseReducer(state = initialState, action) {
  switch (action.type) {
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
