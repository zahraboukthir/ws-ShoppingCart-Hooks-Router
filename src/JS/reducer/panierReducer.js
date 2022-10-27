import {
  ADDTOCART,
  DECREMENTQTE,
  DELETPROD,
  INCREMENTQTE,
  UPDATECART,
} from "../actionsTypes/panierConst";

const initState = {
  panier: [],
  total: 0,
};
export const panierReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADDTOCART:
      const existprod = state.panier.find((el) => el.id == payload.id);

      if (existprod) {
        alert("prod deja ajouté");
        return state;
      } else {
        return {
          ...state,
          panier: [payload, ...state.panier],
          total: state.total + Number(payload.price),
        };
      }
    case INCREMENTQTE:
      return {
        ...state,
        total: state.total + Number(payload.priceprod),
        panier: state.panier.map((el) =>
          el.id == payload.idprod
            ? {
                ...el,
                qte: el.qte + 1,
                priceT: Number(el.priceT) + Number(el.price),
              }
            : el
        ),
      };
    case DECREMENTQTE:
      return {
        ...state,
        total:
          payload.qte > 1
            ? state.total - Number(payload.priceprod)
            : state.total,
        panier: state.panier.map((el) =>
          el.id == payload.idprod
            ? {
                ...el,
                qte: payload.qte > 1 ? el.qte - 1 : el.qte,
                priceT:
                  payload.qte > 1
                    ? Number(el.priceT) - Number(el.price)
                    : Number(el.priceT),
              }
            : el
        ),
      };
    case DELETPROD:
      return {
        ...state,
        panier: state.panier.filter((el) => el.id != payload.idprod),
        total: state.total - Number(payload.priceT),
      };
    case UPDATECART:
      return {
        ...state,
        panier: [],
        total: 0,
      };

    default:
      return state;
  }
};
