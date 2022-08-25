import { properties } from "../../Components/data/PropertiesRent";
import { GET_BED } from "../actionType";

const initialState = {
  properties: properties,
};

export const PropertyReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_BED:
      newState = {
        ...state,
        properties: state.properties.filter((property) => property.beds === action.payload),
      };
      return newState;
    default:
      return state;
  }
};
