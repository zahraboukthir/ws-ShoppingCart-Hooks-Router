import {
  ADDPROD,
  DELPROD,
  EDITPROD,
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
    case ADDPROD:
      return {
        ...state,
        list: [payload, ...state.list],
      };
    case EDITPROD:
      return {
        ...state,
        list: state.list.map((el) => (el.id == payload.id ? payload : el)),
      };
      case DELPROD:
    return    {
          ...state,
          list:state.list.filter(
            el=>el.id!=payload
          )
        }
    default:
      return state;
  }
};
