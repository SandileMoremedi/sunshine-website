import Image from "next/image";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const ProductsComponent = ({ products }) => {
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
        <DeleteBtn data={products} />
        <EditBtn product={products} />
      </div>
    </div>
  );
};
export default ProductsComponent;
