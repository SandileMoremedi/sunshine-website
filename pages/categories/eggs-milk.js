import Image from "next/image";
import sanityconfig from "../../sanityconfig";
import Head from "next/head";
import CustomImage from "../../components/CustomImage";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { ProductsContext } from "../../components/ProductsProvider";
import { FaCheckCircle } from "react-icons/fa";
export default function EggsMilk({ data }) {
  const { state, dispatch } = useContext(ProductsContext);
  return (
    <>
      <Head>
        <title>Sunshine CC | Milk, Eggs and Meat</title>
      </Head>
      <div className="categoryProduct">
        <h1>Milk, Eggs and Meat</h1>
        {state.popup && (
          <Modal>
            <span className="modal__text">
              <FaCheckCircle className="modal__text__icon" />
              {`${state.products} added to cart`}
              <button
                className="modal__text__close"
                onClick={() => {
                  dispatch({ type: "POPUP_CLOSE" });
                }}
              >
                X
              </button>
            </span>
          </Modal>
        )}
        <div className="cards">
          {data &&
            data.map(
              (product, index) =>
                product.categoryTitle === "Meat" && (
                  <CustomImage key={index} data={product} />
                )
            )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await sanityconfig.fetch(`
        *[_type == "products"]{
            _id, 
            title, 
            "categoryTitle" : category->title, 
            "ProductImage" : mainImage.asset->url,
            quantity,
            slug,
            price
        }
    `);

  return {
    props: {
      data,
    },
  };
}
