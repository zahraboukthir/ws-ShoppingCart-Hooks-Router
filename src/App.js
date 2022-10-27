import "./App.css";
import ListProd from "./Components/ListProd";

import FilterProduct from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  
  return (
    <div className="App">
      <FilterProduct
    
      />
      <Routes>
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
