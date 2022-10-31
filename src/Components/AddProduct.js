import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addprod } from "./../JS/actions/prodActions";

export function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [prod, setProd] = useState({
    name: "",
    rate: 0,
    price: 0,
    category: "",
    img: "",
    description: ``,
  });
  const handelChange = (e) => {
    setProd({ ...prod, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addprod({ id: Math.random(), ...prod, price:Number(prod.price) }));
    setProd({
      name: "",
      rate: 0,
      price: 0,
      category: "",
      img: "",
      description: ``,
    });
    navigate("/");
  };
  const cancel = () => {
    setProd({
      name: "",
      rate: 0,
      price: 0,
      category: "",
      img: "",
      description: ``,
    });
    navigate("/");
  };
  return (
    <div>
      <div>ADD PRODUCT</div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" onChange={handelChange} required/>
        <br />
        <label htmlFor="">Product Photo</label>
        <input type="url" name="img" id="" onChange={handelChange} required/>

        <br />
        <label htmlFor="">Rate</label>
        <input type="Number" name="rate" id="" onChange={handelChange} required />
        <br />
        <label htmlFor="">Price</label>
        <input type="Number" name="price" id="" onChange={handelChange} required/>
        <br />
        <label htmlFor="">Description</label>
        <textarea required
          name="description"
          id=""
          cols="30"
          rows="10"
          onChange={handelChange}
        ></textarea>
        <br />
        <label htmlFor="">Category</label>
        {/* <input type="text" name="" id="" /> */}
        <select name="category" onChange={handelChange} >
          <option value="Elec">Elec</option>
          <option value="Phone">Phone</option>
          <option value="Clothes">Clothes</option>
          <option value="Info">Info</option>
        </select>
        <br />
        <button>submit</button>
        <button onClick={cancel}>cancel</button>
      </form>
    </div>
  );
}
