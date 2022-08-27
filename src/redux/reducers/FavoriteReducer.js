import { GET_FAVORITE } from "../actionType";
import { properties } from "../../Components/data/PropertiesRent";

let myFavorite =
  JSON.parse(localStorage.getItem("myFavDataArray")) || properties;

const initailState = JSON.parse(localStorage.getItem("myFavData")) || {
  myFavProperties: [],
};

export const FavoriteReducer = (state = initailState, action) => {
  let newState;
  switch (action.type) {
    case GET_FAVORITE:
      newState = {
        ...state,
        myFavProperties: myFavorite.map((property) => {
          if (property.id === action.payload.id) {
            return { ...property, favorite: action.payload.favorite };
          }
          return property;
        }),
        loader: false,
      };
      myFavorite = newState.myFavProperties;
      localStorage.setItem("myFavDataArray", JSON.stringify(myFavorite));
      localStorage.setItem("myFavData", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};
