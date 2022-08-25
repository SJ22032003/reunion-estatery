export const setPrice = (price) => {
    if(price > 999){
        return price.toLocaleString();
    }else{
        return price;
    }
}
