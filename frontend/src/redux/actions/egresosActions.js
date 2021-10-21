export const ADD_EGRESO = "ADD_EGRESO";
export const ADD_EGRESO_SUCCESS = "ADD_EGRESO_SUCCESS";
export const ADD_EGRESO_ERROR = "ADD_EGRESO_ERROR";

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
