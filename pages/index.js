// import Head from "next/head";
import Head from "next/head";
import Image from "next/image";
import CustomImage from "../components/CustomImage";
import sanityconfig from "../sanityconfig";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home({ data }) {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Sunshine Cash Carry Online</title>
        <meta
          name="description"
          content="This is the official e-commerce website"
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
    *[_type == "products"]{_id, title, slug, "ProductImage": mainImage.asset->url}
    `
  );
  return {
    props: {
      data,
    },
  };
};
