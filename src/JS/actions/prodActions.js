import {
  FILTERBYCATEGORY,
  FILTERBYNAME,
  FILTERBYRATE,
  PRODDEATAILS,
} from "../actionsTypes/prodConst";

export const proddetails = (idprod) => {
  return { type: PRODDEATAILS, payload: idprod };
};

export const filterbyname = (name) => {
  return {
    type: FILTERBYNAME,
    payload: name,
  };
};
export const filterbyrate = (rate) => {
  return {
    type: FILTERBYRATE,
    payload: rate,
  };
};
export const filterbycategory = (category) => {
  return {
    type: FILTERBYCATEGORY,
    payload: category,
  };
};
