import Image from "next/image";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { useEffect, useState } from "react";

const ProductsComponent = ({ products }) => {
  useEffect(() => {
    console.log("Now");
  }, [products]);
  return (
    <div className="product__dashboard">
      <div className="image__dashboard">
        <Image
          src={products.ProductImage}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3>{products.title}</h3>
      <div className="buttons">
        <DeleteBtn product={products} />
        <EditBtn product={products} />
      </div>
    </div>
  );
};
export default ProductsComponent;
