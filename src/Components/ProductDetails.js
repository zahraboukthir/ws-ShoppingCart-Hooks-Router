import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./d.css";
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from "../JS/actions/panierActions";
import { proddetails } from "../JS/actions/prodActions";
const ProductDetails = () => {
  const dispatch=useDispatch()
  const {idprod}=useParams()
  useEffect(() => {
   dispatch(
    proddetails(idprod)
   )
  
    
  }, [idprod])
  
  const prod=useSelector(state=>state.prodDetails)
  return (
    <main className="containerc">
      {/* Left Column / Headphones Image */}
      <div className="left-column">
        <img data-image="black" src={prod.img} alt="" />
        <img data-image="blue" src={prod.img}alt="" />
        <img data-image="red" className="active" src={prod.img}alt="" />
      </div>
      {/* Right Column */}
      <div className="right-column">
        {/* Product Description */}
        <div className="product-description">
          <h1>{prod.name}</h1>
          <p>{prod.description}</p>
        </div>

        {/* Product Pricing */}
        <div className="product-price">
          <span>{prod.price}</span>
          <button className="cart-btn" 
         onClick={()=>dispatch(addtocart(prod))}
          >Add to cart</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
