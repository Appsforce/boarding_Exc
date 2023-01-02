import React from "react";
import "./App.css";
import Product_card from "./components/Product_card/ProductCard";

function App() {
  return (
    <div className="App">
      <Product_card
        name="test"
        brand="nike"
        id={123}
        price={200}
        product_image={{ url: "https:/asd" }}
      />
    </div>
  );
}

export default App;
