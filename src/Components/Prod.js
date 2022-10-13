import { Link } from "react-router-dom";
import "./prod.css";

export function Prod({ produit, addpanier }) {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={produit.img} height={420} width={327} alt="" />
        
      </div>
      <div className="product-info">
      <Link to={`/${produit.id}`}>
              see Details
            </Link>
        <div className="product-text">
          <h1>{produit.name}</h1>
          <h2> {produit.category}</h2>
          <p> {produit.description} </p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{produit.price}</span>dt
          </p>{" "}
          <br />
          <div style={{ display: "flex" }}>
            
            <Link to="/panier">
              <button type="button">Go to Cart</button>
            </Link>
            <button type="button" onClick={() => addpanier(produit)}>
              buy now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
