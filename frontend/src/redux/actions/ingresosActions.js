export const ADD_INGRESO = "ADD_INGRESO";
export const ADD_INGRESO_SUCCESS = "ADD_INGRESO_SUCCESS";
export const ADD_INGRESO_ERROR = "ADD_INGRESO_ERROR";

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
