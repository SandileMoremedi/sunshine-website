import Image from "next/image";
import sanityconfig from "../sunshinestudio/sanityconfig";
import { motion } from "framer-motion";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h1>{product.title}</h1>
      <motion.div layoutId={product.slug.current} className="image">
        <Image
          src={product.productImage}
          width={300}
          height={300}
          alt="Product Photo"
        />
      </motion.div>
    </div>
  );
};
export default Product;
export async function getStaticPaths() {
  const paths = await sanityconfig.fetch(
    `*[_type == "products" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const product = await sanityconfig.fetch(
    `
    *[_type == "products" && slug.current == $slug][0]{slug, "productImage": mainImage.asset->url, title}
  `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}
