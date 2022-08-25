import { GET_FILTERS } from "./actionType";
import { REMOVE_FILTERS } from "./actionType";

export const getFilters = (filters) => {
  return {
    type: GET_FILTERS,
    payload: filters,
  };
};

export const removeFilters = () => {
  return {
    type: REMOVE_FILTERS,
  };
};
