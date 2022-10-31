import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editprod, proddetails } from "./../JS/actions/prodActions";

function Editprod() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false)
  const proddet = useSelector((state) => state.prodReducer.prodDetails);
  useEffect(() => {
    dispatch(proddetails(id));
    setloading(true)
    if (loading) {
        return setProd(proddet)
    }
  }, [id,loading,proddet,dispatch]);
 
  const [prod, setProd] = useState({
    name: "",
    rate: 0,
    price: 0,
    category: "",
    img:"",
    description: "",
  });

  const handelChange = (e) => {
    setProd({ ...prod, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const editedprod={id,...prod, price:Number(prod.price)}
 dispatch(
 
    editprod(editedprod)
 )
console.log(  editedprod)
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
        <input value={prod.name} type="text" name="name" id="" onChange={handelChange} required />
        <br />
        <label htmlFor="">Product Photo</label>
        <input value={prod.img}
         type="url" name="img" id="" onChange={handelChange} required />

        <br />
        <label htmlFor="">Rate</label>
        <input value={prod.rate}
          type="Number"
          name="rate"
          id=""
          onChange={handelChange}
          required
        />
        <br />
        <label htmlFor="">Price</label>
        <input value={prod.price}
          type="Number"
          name="price"
          id=""
          onChange={handelChange}
          required
        />
        <br />
        <label htmlFor="">Description</label>
        <textarea
        value={prod.description}
          required
          name="description"
          id=""
          cols="30"
          rows="10"
          onChange={handelChange}
        ></textarea>
        <br />
        <label htmlFor="">Category</label>
        {/* <input type="text" name="" id="" /> */}
        <select 
        name="category" onChange={handelChange}>
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

export default Editprod;
