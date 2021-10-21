import { combineReducers } from "redux";
import egresosReducer from "./egresosReducer";
import ingresosReducer from "./ingresosReducer";

export default combineReducers({
  ingresos: ingresosReducer,
  egresos: egresosReducer,
});
