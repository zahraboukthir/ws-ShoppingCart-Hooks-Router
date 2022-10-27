
import { useDispatch } from 'react-redux';
import { decrementqte, deletprod, incrementqte } from '../JS/actions/panierActions';

export function ProdCart({prod}) {
  const dispatch=useDispatch()
  return (
    <div className="layout-inline row">
      <div className="col col-pro layout-inline">
        <img src={prod.img} alt="kitten" />
        <p>{prod.name} </p>
      </div>
      <div className="col col-price col-numeric align-center ">
        <p>{prod.price} dt</p>
      </div>
      <div className="col col-qty layout-inline">
        <button href="#" className="qty qty-minus"
        onClick={()=>dispatch(
          decrementqte(prod.id,prod.price,prod.qte)
        )}
        >
          -
        </button>
        <input type="numeric" value={prod.qte} readOnly />
        <button className="qty qty-plus" onClick={()=>dispatch(
          incrementqte(prod.id,prod.price)
        )}>+</button>
      </div>

      <div className="col col-total col-numeric">
        <p>{prod.priceT} dt</p>
      </div>
      <div className="col col-vat col-numeric">
        <button onClick={()=>dispatch(
          deletprod(prod.id,prod.priceT)
        )}>X</button>
      </div>
    </div>
  );
}
