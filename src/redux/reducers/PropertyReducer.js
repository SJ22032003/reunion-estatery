import { properties } from "../../Components/data/PropertiesRent";
import {
  GET_FILTERS,
  REMOVE_FILTERS,
  GET_SEARCH,
  GET_FAVORITE,
} from "../actionType";

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

    case GET_SEARCH:
      newState = {
        ...state,
        properties: properties.filter((property) => {
          return property.name
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
      return newState;

    case GET_FAVORITE:
      newState = {
        ...state,
        properties: state.properties.map((property) => {
          if (property.id === action.payload.id) {
            return { ...property, favorite: action.payload.favorite };
          }
          return property;
        }),
      };
      return newState;

    default:
      return state;
  }
};
