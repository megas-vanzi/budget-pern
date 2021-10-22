export const ADD_INGRESO = "ADD_INGRESO";
export const ADD_INGRESO_SUCCESS = "ADD_INGRESO_SUCCESS";
export const ADD_INGRESO_ERROR = "ADD_INGRESO_ERROR";

export const EDIT_INGRESO = "EDIT_INGRESO";
export const EDIT_INGRESO_SUCCESS = "EDIT_INGRESO_SUCCESS";
export const EDIT_INGRESO_ERROR = "EDIT_INGRESO_ERROR";

export const DELETE_INGRESO = "DELETE_INGRESO";
export const DELETE_INGRESO_SUCCESS = "DELETE_INGRESO_SUCCESS";
export const DELETE_INGRESO_ERROR = "DELETE_INGRESO_ERROR";

//ADD
export function addNewIngresoAction(newIngreso) {
  return (dispatch) => {
    dispatch(addNewIngreso());

    try {
      dispatch(addIngresoSuccess(newIngreso));
    } catch (error) {
      dispatch(addIngresoError(true));
    }
  };
}

const addNewIngreso = () => ({
  type: ADD_INGRESO,
});

const addIngresoSuccess = (expense) => ({
  type: ADD_INGRESO_SUCCESS,
  payload: expense,
});

const addIngresoError = (errorState) => ({
  type: ADD_INGRESO_ERROR,
  payload: errorState,
});

//EDIT
export function editIngresoAction(ingreso) {
  return (dispatch) => {
    dispatch(editIngreso());

    try {
      dispatch(editIngresoSuccess(ingreso));
    } catch (error) {
      dispatch(editIngresoError(true));
    }
  };
}

const editIngreso = () => ({
  type: EDIT_INGRESO,
});

const editIngresoSuccess = (expense) => ({
  type: EDIT_INGRESO_SUCCESS,
  payload: expense,
});

const editIngresoError = (errorState) => ({
  type: EDIT_INGRESO_ERROR,
  payload: errorState,
});

//DELETE
export function deleteIngresoAction(ingreso) {
  return (dispatch) => {
    dispatch(deleteIngreso());

    try {
      dispatch(deleteIngresoSuccess(ingreso));
    } catch (error) {
      dispatch(deleteIngresoError(true));
    }
  };
}

const deleteIngreso = () => ({
  type: DELETE_INGRESO,
});

const deleteIngresoSuccess = (expense) => ({
  type: DELETE_INGRESO_SUCCESS,
  payload: expense,
});

const deleteIngresoError = (errorState) => ({
  type: DELETE_INGRESO_ERROR,
  payload: errorState,
});
