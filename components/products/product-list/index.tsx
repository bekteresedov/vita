import { productList } from "@/constants/product";
import React, { memo } from "react";
import ProductItem from "../product-item";

const ProductList = () => {
  return (
    <>
      <div className="products">
        <h2>Repair with Us</h2>
        <p>
          With us, you can have all your electronic devices repaired quickly and
          safely.
        </p>
        <div>
          <ul className="product-cards">
            {productList.map((product, index) => (
              <li key={index + product.title}>
                <ProductItem
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductList;
