export const ADD_EGRESO = "ADD_EGRESO";
export const ADD_EGRESO_SUCCESS = "ADD_EGRESO_SUCCESS";
export const ADD_EGRESO_ERROR = "ADD_EGRESO_ERROR";
export const EDIT_EGRESO = "EDIT_EGRESO";
export const EDIT_EGRESO_SUCCESS = "EDIT_EGRESO_SUCCESS";
export const EDIT_EGRESO_ERROR = "EDIT_EGRESO_ERROR";

export function addNewEgresoAction(newEgreso) {
  return (dispatch) => {
    dispatch(addNewEgreso());

    try {
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

export function editEgresoAction(egreso) {
  return (dispatch) => {
    dispatch(editEgreso());

    try {
      dispatch(editEgresoSuccess(egreso));
    } catch (error) {
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
