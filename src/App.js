import "./App.css";
import ListProd from "./Components/ListProd";

import FilterProduct from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import { AddProduct } from "./Components/AddProduct";

function App() {
  
  return (
    <div className="App">
      <FilterProduct
    
      />
      
      <Routes>
        <Route path='/addproduct'  element={
          <AddProduct/>
        }/>
        <Route
          path="/"
          element={
            <ListProd
             
            />
          }
        />
        <Route
          path="/panier"
          element={
            <Panier
             
            />
          }
        />
        {/* if we use btn */}
        {/* <Route
          path="/details"
          element={
            <ProductDetails  />
          }
        /> */}
        <Route
          path="/:idprod"
          element={
            <ProductDetails  />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
