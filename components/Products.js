// import Image from "next/image";
// import Link from "next/link";
import { FaSearch } from "react-icons/fa";

import ProductsComponent from "./ProductsComponent";
import { useState, useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

const Products = ({ data }) => {
  const [query, setQuery] = useState("");
  const { dispatch } = useContext(ProductsContext);

  return (
    <>
      <div className="searchBar">
        <label htmlFor="searchbar">
          <FaSearch />
        </label>
        <input
          type="text"
          id="searchbar"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <button
        className="addProducts"
        type="button"
        onClick={() => dispatch({ type: "ADDING_PRODUCT" })}
      >
        Add Product +
      </button>
      <div className="products__grid">
        {data.length !== 0 ? (
          data
            .filter((item) =>
              item.title.toLowerCase().includes(String(query).toLowerCase())
            )
            .map((product, index) => (
              <ProductsComponent key={index} products={product} />
            ))
        ) : (
          <h2>No Items Included</h2>
        )}
      </div>
    </>
  );
};
export default Products;
