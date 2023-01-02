import React from "react";
import "./App.css";
import ProductCard from "./components/Product_card/ProductCard";

function App() {
  return (
    <div className="App">
      <ProductCard
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
