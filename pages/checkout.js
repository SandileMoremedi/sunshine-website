import Image from "next/image";
import { FaTrash, FaCheck, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useContext } from "react";
import { ProductsContext } from "../components/ProductsProvider";

export default function Checkout() {
  const { state, dispatch } = useContext(ProductsContext);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <>
        <div className="checkout__list">
          {state.products !== 0 ? (
            state.listItems.map((product, index) => (
              <div className="checkout__item" key={index}>
                <div className="image">
                  <Image
                    src={product.image}
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
                </div>
                <button
                  className="cancel"
                  onClick={() => {
                    dispatch({
                      type: "REMOVED_AN_ITEM",
                      payload: product.id,
                    });
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          ) : (
            <>
              <div className="checkout__empty">
                <h2>Cart Is Empty</h2>
              </div>
            </>
          )}
        </div>
      </>
    </div>
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
