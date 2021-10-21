import {
  ADD_INGRESO,
  ADD_INGRESO_SUCCESS,
  ADD_INGRESO_ERROR,
} from "../actions/ingresosActions";

const initialState = {
  ingresos: [],
  error: null,
};

function ingresosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGRESO:
      return {
        ...state,
      };
    case ADD_INGRESO_SUCCESS:
      return {
        ...state,
        ingresos: [...state.ingresos, action.payload],
      };
    case ADD_INGRESO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default ingresosReducer;
