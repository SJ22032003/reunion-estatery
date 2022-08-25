export const setPrice = (price) => {
  return price.toLocaleString();
};

export const getFilteredProperties = (myPropertyData, myFilteredData) => {
  const { location, price, beds, propertyType } = myFilteredData;
  let filteredData = [...myPropertyData];

  if (location) {
    filteredData = filteredData.filter(
      (property) => property.city === location
    );
  }
  if (price) {
    filteredData = filteredData.filter((property) => property.price == price);
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
