// import Head from "next/head";
import Head from "next/head";
import Image from "next/image";
import CustomImage from "../components/CustomImage";
import sanityconfig from "../sanityconfig";
import { useUser } from "@auth0/nextjs-auth0";
import { useState, useContext } from "react";
import { ProductsContext } from "../components/ProductsProvider";
import { FaCheckCircle } from "react-icons/fa";
import Modal from "../components/Modal";

export default function Home({ data }) {
  const { user, error, isLoading } = useUser();
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
        <Modal></Modal>
        <div className="cards">
          {data &&
            data.map((card, index) => <CustomImage data={card} key={index} />)}
        </div>
        {user && <h2>{user.name}</h2>}
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
