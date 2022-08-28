import { properties } from "../data/PropertiesRent";

export const setPrice = (price) => {
  return price.toLocaleString();
};

export const getFilteredProperties = (myFilteredData) => {
  let { location, price, beds, propertyType } = myFilteredData;
  let filteredData = [...properties];

  if (location) {
    filteredData = filteredData.filter(
      (property) => property.city === location
    );
  }
  if (price) {
    filteredData = filteredData.filter((property) => property.price >= price && property.price <= 2*price);
  }
  if (beds) {
    filteredData = filteredData.filter((property) => property.beds == beds);
  }
  if (propertyType) {
    filteredData = filteredData.filter(
      (property) => property.type === propertyType
    );
  }

  return filteredData;
};
