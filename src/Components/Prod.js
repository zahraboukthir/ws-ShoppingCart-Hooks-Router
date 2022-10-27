import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart, proddetails } from "../JS/actions/panierActions";
import "./prod.css";

export function Prod({
  produit: { id, name, category, description, price, img, rate },
}) {
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={img} height={420} width={327} alt="" />
      </div>
      <div className="product-info">

      <Link to={`/${id}`}>see Details</Link>
        {/* <Link to={`/details`}><button onClick={()=>
        dispatch(
          proddetails(id)
        )
        }>see Details</button></Link> */}
        <div className="product-text">
          <h1>{name} </h1>
          <h2>{category} </h2>
          <p>{description} </p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{price} </span>dt
          </p>{" "}
          <br />
          <div style={{ display: "flex" }}>
            <Link to="/panier">
              <button type="button">Go to Cart</button>
            </Link>
            <button
              type="button"
              onClick={() =>
                dispatch(addtocart({ id, name, category, price, img ,qte:1, priceT:price }))
              }
            >
              buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
