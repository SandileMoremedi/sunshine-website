import Image from "next/image";
import { FaTrash, FaCheck, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useContext } from "react";
import { ProductsContext } from "../components/ProductsProvider";

export default function Checkout() {
  const { state, dispatch } = useContext(ProductsContext);
  console.log(state);
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__list">
        <>
          {state &&
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
                <button className="cancel">
                  <FaTrash />
                </button>
              </div>
            ))}
        </>
      </div>

      <div className="checkout__confirm">
        <div className="checkout__text">
          <h3>Order?</h3>
          <p>Do you want to confirm your order?</p>
        </div>
        <div className="confirm__buttons">
          <button
            className="confirm__button__green"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "REMOVED_AN_ITEM",
                payload: product.id,
              });
            }}
          >
            <FaThumbsUp />
          </button>
          <button className="confirm__button__cancel">
            <FaThumbsDown />
          </button>
        </div>
      </div>
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
