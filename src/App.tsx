import React, { useState, useEffect } from "react";
import "./App.css";
import { ProductCard } from "./components";

function App() {
  interface MSWRes {
    name: string;
    brand: string;
    image?: string;
    price: number;
    id: string;
  }
  return (
    <div className="App">
      {MockRes &&
        MockRes.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            brand={item.brand}
            price={item.price}
            image={item.image}
          />
        ))}
    </div>
  );
}

export default App;
