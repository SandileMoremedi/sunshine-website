import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../components/ProductsProvider";
import Head from "next/head";

export default function Checkout() {
  const { state, dispatch } = useContext(ProductsContext);
  const [items, setItem] = useState([]);
  useEffect(() => {
    const list = JSON.parse(window.localStorage.getItem("items"));
    setItem(list);
  }, []);

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
            <span>R{state.total}</span>
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
                          dispatch({
                            type: "ADD_PRODUCT",
                            payload: {
                              title: product.title,
                              slug: product.slug.current,
                              id: product._id,
                              image: product.ProductImage,
                              price: product.price,
                              quantityWanted: product.quantityWanted--,
                            },
                          });
                        }}
                      >
                        -
                      </button>
                      <span>{product.quantityWanted}</span>
                      <button
                        type="button"
                        onClick={() => {
                          dispatch({
                            type: "MINUS_PRODUCT",
                            payload: {
                              title: product.title,
                              slug: product.slug.current,
                              id: product._id,
                              image: product.ProductImage,
                              price: product.price,
                              quantityWanted: product.quantityWanted++,
                            },
                          });
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
                    dispatch({
                      type: "REMOVED_AN_ITEM",
                      payload: product,
                    });
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

// export const getStaticPaths = async context => {

//   const p = await sanityconfig.fetch(`*[_type == "products" && defined()]`)
//   return {
//     props: {},
//   };
// };

// export const getStaticProps = async () => {
//   const data = await sanityconfig.fetch(
//     `
//     *[_type == "products"]{_id, title, slug, "ProductImage": mainImage.asset->url, price}
//     `
//   );
//   return {
//     props: {
//       data,
//     },
//   };
// };
