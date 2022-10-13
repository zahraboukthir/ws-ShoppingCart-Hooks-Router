import { Prod } from "./Prod"



function ListProd({productlist,addpanier}){
    return(
        <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap" }}>
          {productlist.map((e)=><Prod produit={e} key={e.id} addpanier={addpanier} /> )}
        </div>
    )
}
export default ListProd