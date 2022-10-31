import {
  FILTERBYCATEGORY,
  FILTERBYNAME,
  FILTERBYRATE,
  PRODDEATAILS,
  ADDPROD,
  EDITPROD,
  DELPROD,
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
export const addprod = (newprod) => {
  return {
    type: ADDPROD,
    payload: newprod,
  };
};
export const editprod = (editedprod) => {
  return {
    type:  EDITPROD,
    payload: editedprod
  };
};
export const delprod = (idprod) => {
  return {
    type:  DELPROD,
    payload: idprod
  };
};