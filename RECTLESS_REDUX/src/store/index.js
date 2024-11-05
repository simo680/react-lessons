import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { stringReducer } from "./stringReducer";
import { userReducer } from "./usersReducer";
import thunk from "redux-thunk";
import { employeeReducer } from "./employeeReducer";

const rootReducer = combineReducers({
  count: countReducer,
  string: stringReducer,
  users: userReducer,
  employee: employeeReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
