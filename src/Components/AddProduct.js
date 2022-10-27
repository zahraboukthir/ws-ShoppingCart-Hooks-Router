import React from "react";

export function AddProduct() {
  return (
    <div>
      <div>ADD PRODUCT</div>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Product Photo</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Category</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Rate</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Price</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Description</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button>submit</button>
        <button>cancel</button>
      </form>
    </div>
  );
}
