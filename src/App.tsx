import React, { useState } from "react";
import "./App.css";
import { ProductCard } from "components";
import { Product } from "shared/models";

function App() {
  const [MockRes, setData] = useState<Product[]>([]);
  setData([]);
  return (
    <div className="App">
      {MockRes.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default App;
