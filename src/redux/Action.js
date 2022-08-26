import { GET_FILTERS } from "./actionType";
import { REMOVE_FILTERS } from "./actionType";
import { GET_SEARCH } from "./actionType";
import { GET_FAVORITE } from "./actionType";

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

export const getSearch = (search) => {
  return {
    type: GET_SEARCH,
    payload: search,
  }
}

export const getFavorite = (id,favorite) => {
  return {
    type: GET_FAVORITE,
    payload: {id,favorite},
  }
}
