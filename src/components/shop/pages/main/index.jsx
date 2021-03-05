import { useEffect, useState } from "react";
import Product_item from "./product_item";
import axios from "axios";

export default () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios("/db.json").then(({data})=>{
            setProducts(data.pizzas);
        });
    }, []);

  return (
    <main>
      <div className="product">
        {
            products.length ? products.map(product=><Product_item key={product.id} {...product} />) : "Loading..."
        }
      </div>
    </main>
  );
};
