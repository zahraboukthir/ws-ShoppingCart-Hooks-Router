import React from 'react'
import { useParams } from 'react-router-dom';
import "./d.css"
const ProductDetails = ({productlist,handleaddpanier}) => {
  
  const {idprod}=useParams()
 const pd=productlist.find(el=>el.id==idprod)
  
    return (
      <main className="containerc">
        {/* Left Column / Headphones Image */}
        <div className="left-column">
          <img data-image="black" src={pd.img} alt="" />
          <img data-image="blue" src={pd.img}alt="" />
          <img data-image="red" className="active" src={pd.img}alt="" />
        </div>
        {/* Right Column */}
        <div className="right-column">
          {/* Product Description */}
          <div className="product-description">
          
            <h1>{pd.name}</h1>
            <p>
           {pd.description}
            </p>
          </div>
  
          {/* Product Pricing */}
          <div className="product-price">
            <span>{pd.price}</span>
            <button onClick={()=>handleaddpanier(pd)}  className="cart-btn">
              Add to cart
            </button>
          </div>
        </div>
      </main>
    );
  };
  
  export default ProductDetails;