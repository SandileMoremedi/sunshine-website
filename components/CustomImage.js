import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";
const CustomImage = ({ data }) => {
  const { dispatch } = useContext(ProductsContext);
  return (
    <div className="card">
      <div className="card__image">
        <Image
          src={data.ProductImage}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2>
        <Link href={data.slug.current}>{data.title}</Link>
      </h2>
      <span>{`Quantity: ${data.quantity}`}</span>
      <span>{`Price: R${data.price}`}</span>
      <div className="card__buttons">
        <button
          className="card__buttons__add"
          onClick={dispatch({
            type: "ADDED_AN_ITEM_TO_CART",
            payload: data.slug.current,
          })}
        >
          Add To Cart
        </button>
        <Link
          href="/checkout"
          className="card__buttons__checkout"
          onClick={dispatch({
            type: "ADDED_AN_ITEM_TO_CART_AND_CHECKOUT",
            payload: data.slug.current,
          })}
        >
          Add and Checkout
        </Link>
      </div>
    </div>
  );
};
export default CustomImage;
