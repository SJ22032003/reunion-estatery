import { GET_BED } from "./actionType";

export const getBed = (beds) => {
    return {
        type: GET_BED,
        payload: beds
    };
}