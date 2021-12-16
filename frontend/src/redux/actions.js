import Axios from "axios";

export const GET_EXPENSE = "GET_EXPENSE";
export const GET_EXPENSE_SUCCESS = "GET_EXPENSE_SUCCESS";
export const GET_EXPENSE_ERROR = "GET_EXPENSE_ERROR";

export const ADD_EXPENSE = "ADD_EXPENSE";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_ERROR = "ADD_EXPENSE_ERROR";

export const EDIT_EXPENSE_SET = "EDIT_EXPENSE_SET";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const EDIT_EXPENSE_SUCCESS = "EDIT_EXPENSE_SUCCESS";
export const EDIT_EXPENSE_ERROR = "EDIT_EXPENSE_ERROR";

export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const DELETE_EXPENSE_SUCCESS = "DELETE_EXPENSE_SUCCESS";
export const DELETE_EXPENSE_ERROR = "DELETE_EXPENSE_ERROR";

//READ
export function getExpenseAction(query) {
  return async (dispatch) => {
    dispatch(getExpense());

    try {
      const expenseData = await Axios.get(
        `http://localhost:4000/expense${query}`
      );
      dispatch(getExpenseSuccess(expenseData));
    } catch (error) {
      dispatch(getExpenseError(true));
    }
  };
}

const getExpense = () => ({
  type: GET_EXPENSE,
});

const getExpenseSuccess = (expense) => ({
  type: GET_EXPENSE_SUCCESS,
  payload: expense,
});

const getExpenseError = (errorState) => ({
  type: GET_EXPENSE_ERROR,
  payload: errorState,
});

//ADD
export function addNewExpenseAction(newExpense) {
  return async (dispatch) => {
    dispatch(addNewExpense());

    try {
      await Axios.post("http://localhost:4000/expense", newExpense);
      dispatch(addExpenseSuccess(newExpense));
    } catch (error) {
      dispatch(addExpenseError(true));
    }
  };
}

const addNewExpense = () => ({
  type: ADD_EXPENSE,
});

const addExpenseSuccess = (expense) => ({
  type: ADD_EXPENSE_SUCCESS,
  payload: expense,
});

const addExpenseError = (errorState) => ({
  type: ADD_EXPENSE_ERROR,
  payload: errorState,
});

//EDIT
export function editExpenseSetAction(expense) {
  return (dispatch) => {
    dispatch(editExpenseSet(expense));
  };
}

const editExpenseSet = (expense) => ({
  type: EDIT_EXPENSE_SET,
  payload: expense,
});

export function editExpenseAction(expense) {
  return async (dispatch) => {
    dispatch(editExpense());

    try {
      await Axios.put(`http://localhost:4000/expense/${expense.id}`, expense);
      dispatch(editExpenseSuccess(expense));
    } catch (error) {
      console.log(error);
      dispatch(editExpenseError(true));
    }
  };
}

const editExpense = () => ({
  type: EDIT_EXPENSE,
});

const editExpenseSuccess = (expense) => ({
  type: EDIT_EXPENSE_SUCCESS,
  payload: expense,
});

const editExpenseError = (errorState) => ({
  type: EDIT_EXPENSE_ERROR,
  payload: errorState,
});

//DELETE
export function deleteExpenseAction(expense) {
  return async (dispatch) => {
    dispatch(deleteExpense());

    try {
      const { data } = await Axios.delete(
        `http://localhost:4000/expense/${expense}`
      );
      dispatch(deleteExpenseSuccess(expense));
      console.log(data);
    } catch (error) {
      dispatch(deleteExpenseError(true));
    }
  };
}

const deleteExpense = () => ({
  type: DELETE_EXPENSE,
});

const deleteExpenseSuccess = (expense) => ({
  type: DELETE_EXPENSE_SUCCESS,
  payload: expense,
});

const deleteExpenseError = (errorState) => ({
  type: DELETE_EXPENSE_ERROR,
  payload: errorState,
});
