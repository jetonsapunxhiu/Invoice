import Product from "./product";
import {products} from '../json/products';
import { useState } from "react";

function Products() {
    const [produktet, setProduktet] = useState(products);
    
  return (
    <div className="products">
        {
            produktet.map(element => 
                <Product element={element} /> 
            )
        }
    </div>
  );
}

export default Products;
