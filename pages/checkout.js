// NextJS Imports
import Image from "next/image";
import Head from "next/head";
// React Imports
import { useContext, useEffect, useState } from "react";
// Packages Imports
import { FaTrash } from "react-icons/fa";
// Components Imports
import { ProductsContext } from "../components/ProductsProvider";

export default function Checkout() {
  const { dispatch } = useContext(ProductsContext);
  // State for iterating through the localStorage items
  const [items, setItem] = useState([]);
  // State for checking the total of the items picked
  const [total, setTotal] = useState(0);
  if (typeof window !== "undefined") {
    var list = JSON.parse(window.localStorage.getItem("items"));
  }

  useEffect(() => {
    setItem(list);
  }, []);
  // TASKS: Add the total and make functions for deleting and adding items

  return (
    <>
      <Head>
        <title>Sunshine CC | Checkout</title>
      </Head>
      <h1>Checkout</h1>
      <div className="checkout">
        <aside className="checkout__aside">
          <h2>Products Summary</h2>
          <div className="aside__heading">
            <h4>Total:</h4>
            <span>R{total}</span>
          </div>
          <button>Order</button>
        </aside>
        <div className="checkout__list">
          {items.length !== 0 ? (
            items.map((product, index) => (
              <div className="checkout__item" key={index}>
                <div className="image">
                  <Image
                    src={product.ProductImage}
                    objectFit="contain"
                    alt="Product Picture"
                    width={150}
                    height={155}
                  />
                </div>
                <div className="info">
                  <h3>{product.title}</h3>
                  <span>{`Price: ${product.price}`}</span>
                  <span>Quantity Ordered: 1</span>
                  <div className="info__quantity">
                    <span>How Many Do You Want?</span>
                    <div className="info__quantity__buttons">
                      <button
                        type="button"
                        onClick={() => {
                          const list = JSON.parse(
                            window.localStorage.getItem("items")
                          );
                          const newArr = list.map((item) => {
                            if (item._id === product._id) {
                              return {
                                ...item,
                                number: item.number - 1,
                              };
                            } else {
                              return { ...item };
                            }
                          });
                          window.localStorage.setItem(
                            "items",
                            JSON.stringify(newArr)
                          );
                          setItem(
                            JSON.parse(window.localStorage.getItem("items"))
                          );
                        }}
                      >
                        -
                      </button>
                      <span>{product.number}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const list = JSON.parse(
                            window.localStorage.getItem("items")
                          );
                          const newArr = list.map((item) => {
                            if (item._id === product._id) {
                              return {
                                ...item,
                                number: item.number + 1,
                              };
                            } else {
                              return { ...item };
                            }
                          });
                          window.localStorage.setItem(
                            "items",
                            JSON.stringify(newArr)
                          );
                          setItem(
                            JSON.parse(window.localStorage.getItem("items"))
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="cancel"
                  onClick={() => {
                    const list = JSON.parse(
                      window.localStorage.getItem("items")
                    );
                    const newArr = list.filter((item) => {
                      if (product._id === item._id) {
                        return;
                      } else {
                        return { ...item };
                      }
                    });
                    window.localStorage.setItem(
                      "items",
                      JSON.stringify(newArr)
                    );
                    setItem(JSON.parse(window.localStorage.getItem("items")));
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <div className="checkout__empty">
              <h2>Cart Is Empty</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
