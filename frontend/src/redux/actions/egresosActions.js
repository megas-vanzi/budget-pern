import Axios from "axios";

export const ADD_EGRESO = "ADD_EGRESO";
export const ADD_EGRESO_SUCCESS = "ADD_EGRESO_SUCCESS";
export const ADD_EGRESO_ERROR = "ADD_EGRESO_ERROR";

export const EDIT_EGRESO_SET = "EDIT_EGRESO_SET";
export const EDIT_EGRESO = "EDIT_EGRESO";
export const EDIT_EGRESO_SUCCESS = "EDIT_EGRESO_SUCCESS";
export const EDIT_EGRESO_ERROR = "EDIT_EGRESO_ERROR";

export const DELETE_EGRESO = "DELETE_EGRESO";
export const DELETE_EGRESO_SUCCESS = "DELETE_EGRESO_SUCCESS";
export const DELETE_EGRESO_ERROR = "DELETE_EGRESO_ERROR";

//ADD
export function addNewEgresoAction(newEgreso) {
  return async (dispatch) => {
    dispatch(addNewEgreso());

    try {
      await Axios.post("http://localhost:4000/expense", newEgreso);
      dispatch(addEgresoSuccess(newEgreso));
    } catch (error) {
      dispatch(addEgresoError(true));
    }
  };
}

const addNewEgreso = () => ({
  type: ADD_EGRESO,
});

const addEgresoSuccess = (expense) => ({
  type: ADD_EGRESO_SUCCESS,
  payload: expense,
});

const addEgresoError = (errorState) => ({
  type: ADD_EGRESO_ERROR,
  payload: errorState,
});

//EDIT
export function editEgresoSetAction(expense) {
  return (dispatch) => {
    dispatch(editEgresoSet(expense));
  };
}

const editEgresoSet = (expense) => ({
  type: EDIT_EGRESO_SET,
  payload: expense,
});

export function editEgresoAction(egreso) {
  return async (dispatch) => {
    dispatch(editEgreso());

    try {
      await Axios.put(`http://localhost:4000/expense/${egreso.id}`, egreso);
      dispatch(editEgresoSuccess(egreso));
    } catch (error) {
      console.log(error);
      dispatch(editEgresoError(true));
    }
  };
}

const editEgreso = () => ({
  type: EDIT_EGRESO,
});

const editEgresoSuccess = (expense) => ({
  type: EDIT_EGRESO_SUCCESS,
  payload: expense,
});

const editEgresoError = (errorState) => ({
  type: EDIT_EGRESO_ERROR,
  payload: errorState,
});

//DELETE
export function deleteEgresoAction(egreso) {
  return async (dispatch) => {
    dispatch(deleteEgreso());

    try {
      const { data } = await Axios.delete(
        `http://localhost:4000/expense/${egreso}`
      );
      dispatch(deleteEgresoSuccess(egreso));
      console.log(data);
    } catch (error) {
      dispatch(deleteEgresoError(true));
    }
  };
}

const deleteEgreso = () => ({
  type: DELETE_EGRESO,
});

const deleteEgresoSuccess = (expense) => ({
  type: DELETE_EGRESO_SUCCESS,
  payload: expense,
});

const deleteEgresoError = (errorState) => ({
  type: DELETE_EGRESO_ERROR,
  payload: errorState,
});
