import { combineReducers } from "redux";
import { globalLoaderReducer } from "./globalReducer";
import { usersListReducer } from "../screen/users/reducer";
import { categoriesListReducer } from "../screen/categories/reducer";
import { companiesListReducer } from "../screen/companies/reducer";

const rootReducer = combineReducers({
  globalLoaderReducer,
  usersListReducer,
  categoriesListReducer,
  companiesListReducer,
});

export default rootReducer;
