import { properties } from "../../Components/data/PropertiesRent";
import { GET_FILTERS, REMOVE_FILTERS } from "../actionType";

const initialState = {
  properties: properties,
};

export const PropertyReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_FILTERS:
      newState = {
        ...state,
        properties: action.payload,
      };
      return newState;

    case REMOVE_FILTERS:
      newState = {
        ...state,
        properties: properties,
      };
      return newState;

    default:
      return state;
  }
};
