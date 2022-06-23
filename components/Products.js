// import Image from "next/image";
// import Link from "next/link";
import { FaSearch } from "react-icons/fa";

import ProductsComponent from "./ProductsComponent";
import { useState } from "react";

const Products = ({ data }) => {
  const [query, setQuery] = useState("");
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
      <div className="products__grid">
        {data &&
          data
            .filter((item) => item.title.includes(query))
            .map((product, index) => (
              <ProductsComponent key={index} products={product} />
            ))}
      </div>
    </>
  );
};
export default Products;
