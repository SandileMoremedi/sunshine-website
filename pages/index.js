// import Head from "next/head";
import Head from "next/head";
import Image from "next/image";
import CustomImage from "../components/CustomImage";
import sanityconfig from "../sanityconfig";
import { useUser } from "@auth0/nextjs-auth0";
import { useState, useContext } from "react";
import { ProductsContext } from "../components/ProductsProvider";

export default function Home({ data }) {
  const { user, error, isLoading } = useUser();
  const [query, setQuery] = useState("");

  return (
    <>
      <Head>
        <title>Sunshine Cash & Carry | Home</title>
        <meta
          name="description"
          content="This is the official e-commerce website of Sunshine Cash and Carry"
        />
      </Head>
      <div className="home">
        <h1>Sunshine CC</h1>
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
