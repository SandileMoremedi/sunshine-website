// import Head from "next/head";
import Head from "next/head";
import Image from "next/image";
import CustomImage from "../components/CustomImage";
import sanityconfig from "../sanityconfig";
import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../components/ProductsProvider";
import { FaCheckCircle, FaSearch } from "react-icons/fa";
import Modal from "../components/Modal";

export default function Home({ data }) {
  const [query, setQuery] = useState("");
  const { state, dispatch } = useContext(ProductsContext);
  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Home</title>
        <meta
          name="description"
          content="This is the official e-commerce website of Sunshine Cash and Carry"
        />
      </Head>
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
      <div className="home">
        <h1>Sunshine CC</h1>
        <div className="searchBar">
          <label htmlFor="searchbar">
            <FaSearch />
          </label>
          <input
            type="text"
            id="searchbar"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <Modal />
        <div className="cards">
          {data &&
            data
              .filter((item) => item.title.includes(query))
              .map((card, index) => <CustomImage data={card} key={index} />)}
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  const data = await sanityconfig.fetch(
    `
    *[_type == "products"]{_id, title, slug, "ProductImage": mainImage.asset->url, price, quantity}
    `
  );
  return {
    props: {
      data,
    },
  };
};
