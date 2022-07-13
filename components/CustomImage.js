// NextJS Imports
import Image from "next/image";
import Link from "next/link";
//React Imports
import { useContext, useState, useEffect } from "react";
// Context Imports
import { ProductsContext } from "./ProductsProvider";

const CustomImage = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const { dispatch, state } = useContext(ProductsContext);
  // This timer function is for closing the pop up when adding an item
  async function timer() {
    setTimeout(() => {
      dispatch({
        type: "POPUP_CLOSE",
      });
    }, 2000);
  }

  useEffect(() => {
    // Fetching the data from the localStorage
    const list = JSON.parse(window.localStorage.getItem("items"));
    // Validating if the list is empty then make the array.
    if (list === null) {
      const arr = [];
      window.localStorage.setItem("items", JSON.stringify(arr));
    }
  }, []);
  //After the page loads, we want the client to add items in the localStorage.
  const addProduct = (para) => {
    // Storing the items array so we can iterate through it easier.
    const list = JSON.parse(window.localStorage.getItem("items"));
    // Checking if the list array has any values then adding the values and returning the array in the localStorage
    if (list.length === 0) {
      para.number = 1;
      window.localStorage.setItem("items", JSON.stringify([para]));
    }
    if (list.length !== 0) {
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element._id === para._id) {
          const newArray = list.map((obj) => {
            if (obj._id === para._id) {
              return { ...obj, number: obj.number + 1 };
            } else {
              return { ...obj };
            }
          });
          console.log(newArray);
          window.localStorage.setItem("items", JSON.stringify(newArray));
        } else {
          para.number = 1;
          const arr = [...list, para];
          window.localStorage.setItem("items", JSON.stringify(arr));
        }
      }
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
            if (!clicked) {
              timer();
              addProduct(data);
              setClicked(true);
            }
          }}
          disabled={clicked}
        >
          Add To Cart
        </button>
        <Link href={`/products/${data.slug.current}`}>Read More</Link>
      </div>
    </div>
  );
};
export default CustomImage;
