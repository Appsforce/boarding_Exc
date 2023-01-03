import React, { useState, useEffect } from "react";
import "./App.css";
import { ProductCard } from "components";
import { Product } from "shared/models";

function App() {
  const [MockRes, setData] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const res: Product[] = await fetch("/products/all").then((res) =>
        res.json()
      );
      setData(res);
    })();
  }, []);

  return (
    <div className="App">
      {MockRes.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default App;
