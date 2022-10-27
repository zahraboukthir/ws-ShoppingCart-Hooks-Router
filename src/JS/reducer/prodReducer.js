import {
  FILTERBYCATEGORY,
  FILTERBYNAME,
  FILTERBYRATE,
  PRODDEATAILS,
} from "../actionsTypes/prodConst";
import { list } from "./Data";

const initState = {
  list: list,
  prodDetails: {},
  filtredname: "",
  rate: 0,
  category: "ALL",
};
export const prodReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODDEATAILS:
      return {
        ...state,
        prodDetails: state.list.find((el) => el.id == payload),
      };

    case FILTERBYNAME:
      return {
        ...state,
        filtredname: payload,
      };
    case FILTERBYRATE:
      return {
        ...state,
        rate: payload,
      };
    case FILTERBYCATEGORY:
      return {
        ...state,
        category: payload,
      };

    default:
      return state;
  }
};
