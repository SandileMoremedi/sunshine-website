// import Head from "next/head";
import Head from "next/head";
import Image from "next/image";
import CustomImage from "../components/CustomImage";
import sanityconfig from "../sunshinestudio/sanityconfig";
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
        {user && (
          <>
            <h2>{user.name}</h2>
          </>
        )}
      </div>
    </>
  );
}
export const getStaticProps = async (context) => {
  const req = await fetch("http://localhost:3030/products");
  const data = await req.json();
  return {
    props: { data },
  };
};

// export const getServerSideProps = async (context) => {
//   const req = await sanityconfig.fetch(
//     `
//     *[_type == "products"]{_id, title, slug}
//     `
//   );

//   return {
//     props: {
//       req,
//     },
//   };
// };
