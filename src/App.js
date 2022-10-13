import "./App.css";
import ListProd from "./Components/ListProd";
import { list } from "./Data";
import { useState } from "react";
import FilterProduct from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const [productlist, setProductlist] = useState(list);

  const [searchbyname, setSearchbyname] = useState("");
  const handlefilterByN = (name) => {
    setSearchbyname(name);
  };
  const [searchbyrate, setSearchbyrate] = useState(0);
  const handlefilterByR = (rate) => {
    setSearchbyrate(rate);
  };
  const [searchbycat, setSearchbycat] = useState("");
  const handlefilterByCat = (category) => {
    setSearchbycat(category);
  };
  const [totalA, settotalA] = useState(0);
  const [panier, setPanier] = useState([]);
  const handleaddpanier = (newprod) => {
    const existprod = panier.find((el) => el.id == newprod.id);
    if (existprod) {
      alert("produit deja ajouter au panier");
    } else {
      setPanier([...panier, newprod]);

      settotalA(totalA + Number(newprod.price));
    }
  };

  const handeladdtotal = (priceprod) => {
    settotalA(Number(totalA) + Number(priceprod));
  };
  const handelmoinstotal = (priceprod) => {
    settotalA(Number(totalA) - Number(priceprod));
  };
  const handeldel = (idprod, pritot) => {
    setPanier(panier.filter((el) => el.id !== idprod));
    settotalA(totalA - Number(pritot));
  };
  const updateCart = () => {
    setPanier([]);
    settotalA(0);
  };
  return (
    <div className="App">
      <FilterProduct
        fbn={handlefilterByN}
        fbr={handlefilterByR}
        fbc={handlefilterByCat}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ListProd
              addpanier={handleaddpanier}
              productlist={
                searchbycat
                  ? productlist.filter(
                      (prod) =>
                        prod.name
                          .toLowerCase()
                          .includes(searchbyname.toLowerCase()) &&
                        prod.rate >= searchbyrate &&
                        prod.category === searchbycat
                    )
                  : productlist.filter(
                      (prod) =>
                        prod.name
                          .toLowerCase()
                          .includes(searchbyname.toLowerCase()) &&
                        prod.rate >= searchbyrate
                    )
              }
            />
          }
        />
        <Route
          path="/panier"
          element={
            <Panier
              panier={panier}
              totalA={totalA}
              handeladdtotal={handeladdtotal}
              handelmoinstotal={handelmoinstotal}
              handeldel={handeldel}
              updateCart={updateCart}
            />
          }
        />
        <Route
          path="/:idprod"
          element={
            <ProductDetails productlist={productlist} handleaddpanier={handleaddpanier} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
