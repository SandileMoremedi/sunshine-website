// NextJS Imports
import Head from "next/head";
import Image from "next/image";

// React Imports & Libraries
import { useState, useContext, useEffect } from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";

//Sanity Imports
import sanityconfig from "../sanityconfig";

//Components Imports
import CustomImage from "../components/CustomImage";
import { ProductsContext } from "../components/ProductsProvider";
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
      <main className="home">
        <h1>Sunshine CC</h1>
        <div className="searchBar">
          <label htmlFor="searchbar">
            <FaSearch />
            <input
              type="search"
              id="searchbar"
              placeholder="Search For Items"
              aria-label="Search for items"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </label>
        </div>
        <Modal />
        <div className="cards">
          {data &&
            data
              .filter((item) => item.title.toLowerCase().includes(String(query).toLowerCase()))
              .map((card, index) => <CustomImage data={card} key={index} />)}
        </div>
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const data = await sanityconfig.fetch(
    `
    *[_type == "products"]{_id, title, slug, "ProductImage": mainImage.asset->url, price, quantity}
    `
  );
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
