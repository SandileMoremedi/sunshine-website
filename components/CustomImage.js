import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "./ProductsProvider";

const CustomImage = ({ data }) => {
  const { dispatch, state } = useContext(ProductsContext);
  async function timer() {
    setTimeout(() => {
      dispatch({
        type: "POPUP_CLOSE",
      });
    }, 2000);
  }
  const [itemPicked, setItemPicked] = useState([]);

  // Checking whether the localStorage has any items
  useEffect(() => {
    const list = JSON.parse(window.localStorage.getItem("items"));
    if (list === null) {
      const arr = [];
      window.localStorage.setItem("items", JSON.stringify(arr));
    }
  }, []);
  const addProduct = async (para) => {
    const list = JSON.parse(window.localStorage.getItem("items"));

    if (list.length === 0) {
      window.localStorage.setItem("items", JSON.stringify([para]));
    } else {
      const newList = [...list, para];
      window.localStorage.setItem("items", JSON.stringify(newList));
    }
  };

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
      <h2>{String(data.title).slice(0, 25)}</h2>
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
            addProduct(data);
          }}
        >
          Add To Cart
        </button>
        <Link href={`/products/${data.slug.current}`}>Read More</Link>
      </div>
    </div>
  );
};
export default CustomImage;
