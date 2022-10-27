
import {
  ADDTOCART,
  INCREMENTQTE,
  DECREMENTQTE,
  DELETPROD,
  UPDATECART,

} from "./../actionsTypes/panierConst";
//add to card
export const addtocart = (newprod) => {
  return {
    type: ADDTOCART,
    payload: newprod,
  };
};

export const incrementqte = (idprod, priceprod) => {
  return { type: INCREMENTQTE, payload: { idprod, priceprod } };
};
export const decrementqte = (idprod, priceprod, qte) => {
  return { type: DECREMENTQTE, payload: { idprod, priceprod, qte } };
};
export const deletprod = (idprod,priceT) => {
  return { type: DELETPROD, payload: {idprod,priceT }};
};
export const updatecart = () => {
  return { type: UPDATECART };
};
