import "./panier.css";
import { ProdCart } from "./ProductCard";
import { useSelector, useDispatch } from 'react-redux';
import { updatecart } from "../JS/actions/panierActions";

export function Panier() {
  const total=useSelector(state=>state.panierReducer.total)
  const panier=useSelector(state=>state.panierReducer.panier)
  const dispatch=useDispatch()
  return (
    <div className="pannier">
      <div className="container">
        <div className="heading">
          <h1>
            <span className="shopper">Shopping Cart</span>
          </h1>
          <div className="visibility-cart transition is-open">X</div>
        </div>
        <div className="cart transition is-open">
          <div className="btn btn-update" onClick={()=>
          dispatch(updatecart())
          }>Update cart</div>
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>

              <div className="col">Total</div>
              <div className="col"></div>
            </div>

         {panier.map(
          prod=>   <ProdCart prod={prod} key={prod.id} />
         )}

            <div className="tf">
              <div className="row layout-inline">
                {/* <div className="col">
                  <p>VAT</p>
                </div>
                <div className="col" />
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Shipping</p>
                </div> */}
                <div className="col" />
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total : {total}</p>
                </div>
                <div className="col" />
              </div>
            </div>
          </div>
          {/* <div onClick={() => updateCart()} className="btn btn-update">
            Update cart
          </div> */}
        </div>
      </div>
    </div>
  );
}
