import { useSelector } from "react-redux";
import { Prod } from "./Prod";

function ListProd() {
  const list=useSelector(
    (state)=>state.list
  )
  const filtredname=useSelector(state=>state.filtredname)
  const rate=useSelector(state=>state.rate)
  const category=useSelector(state=>state.category)
  return (
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
    </div>
  );
}
export default ListProd;
