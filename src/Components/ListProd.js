import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Prod } from "./Prod";

function ListProd() {
  const list=useSelector(
    (state)=>state.prodReducer.list
  )
  const filtredname=useSelector(state=>state.prodReducer.filtredname)
  const rate=useSelector(state=>state.prodReducer.rate)
  const category=useSelector(state=>state.prodReducer.category)
  return (
    <div><Link to="/addproduct">Add New Product</Link>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
  {category=="ALL"?
    list.filter(
      el=>el.name
      .toLowerCase()
      .includes(filtredname.toLowerCase())&& el.rate >=rate
    )
    .map(
      (produit)=>  <Prod produit={produit} key={produit.id}/>
    )
    : 
    list.filter(
      el=>el.name
      .toLowerCase()
      .includes(filtredname.toLowerCase())&& el.rate >=rate
      && el.category==category
    )
    .map(
      (produit)=>  <Prod produit={produit} key={produit.id}/>
    )
  }
    </div></div>
  );
}
export default ListProd;
