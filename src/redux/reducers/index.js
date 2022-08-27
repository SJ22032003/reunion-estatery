import { combineReducers } from "redux";
import { PropertyReducer } from "./PropertyReducer";
import { FavoriteReducer } from "./FavoriteReducer";

const rootReducer = combineReducers({
  PropertyReducer,
  FavoriteReducer,
});

export default rootReducer;
