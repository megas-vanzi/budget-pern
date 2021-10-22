import {
  ADD_EGRESO,
  ADD_EGRESO_SUCCESS,
  ADD_EGRESO_ERROR,
  EDIT_EGRESO,
  EDIT_EGRESO_SUCCESS,
  EDIT_EGRESO_ERROR,
} from "../actions/egresosActions";

const initialState = {
  egresos: [],
  error: null,
};

function egresosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EGRESO:
      return {
        ...state,
      };
    case ADD_EGRESO_SUCCESS:
      return {
        ...state,
        egresos: [...state.egresos, action.payload],
      };
    case ADD_EGRESO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_EGRESO:
      return {
        ...state,
      };
    case EDIT_EGRESO_SUCCESS:
      return {
        ...state,
        egresos: [...state.egresos, action.payload],
      };
    case EDIT_EGRESO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default egresosReducer;
