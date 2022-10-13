import { useState } from "react";

export function ProdCart({ prod ,inTot,decTot,handeldel}) {
  const [quantity, setquantity] = useState(1);
  const [priceTotp, setpriceTotp] = useState(prod.price)
const increment = () => { 
  setquantity(quantity+1)
  setpriceTotp(Number(priceTotp)+Number(prod.price))
  inTot(prod.price)
 }
 const decrement = () => { 
 if (quantity>1) {
  setquantity(quantity-1)
  setpriceTotp(Number(priceTotp)-Number(prod.price))
  decTot(prod.price)
 } else {
  alert("un seul prod")
 }
 }

  return (
    <div className="layout-inline row">
      <div className="col col-pro layout-inline">
        <img src={prod.img} alt="kitten" />
        <p>{prod.name}</p>
      </div>
      <div className="col col-price col-numeric align-center ">
        <p>{prod.price} dt</p>
      </div>
      <div className="col col-qty layout-inline">
        <button href="#" className="qty qty-minus" onClick={decrement}>
          -
        </button>
        <input
          type="numeric"
          value={quantity}
          onChange={(e)=>setquantity(e.target.value)}
        
        />
        <button className="qty qty-plus" onClick={increment} >
          +
        </button>
      </div>
      
      <div className="col col-total col-numeric">
        <p>{priceTotp} dt</p>
      </div>
      <div className="col col-vat col-numeric">
        <button onClick={()=>handeldel(prod.id,priceTotp)}>X</button>
      </div>
    </div>
  );
}
