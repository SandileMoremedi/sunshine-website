import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { ProductsContext } from "./ProductsProvider";

const CustomImage = ({ data }) => {
  const { dispatch, state } = useContext(ProductsContext);
  const [modal, setModal] = useState(false);
  async function timer() {
    setTimeout(() => {
      dispatch({
        type: "POPUP_CLOSE",
      });
    }, 2000);
  }
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
      <h2>{data.title}</h2>
      <span>{`Quantity Available: ${data.quantity}`}</span>
      <span>{`Price: R${data.price}`}</span>
      <div className="card__buttons">
        <button
          className="card__buttons__add"
          onClick={() => {
            dispatch({
              type: "ADDED_AN_ITEM_TO_CART",
              payload: {
                title: data.title,
                slug: data.slug.current,
                id: data._id,
                image: data.ProductImage,
                price: data.price,
                quantityWanted: 1,
              },
            });
            timer();
          }}
        >
          Add To Cart
        </button>
        <Link
          href={`/products/${data.slug.current}`}
          className="card__buttons__checkout"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default CustomImage;
