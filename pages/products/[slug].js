import Image from "next/image";
import sanityconfig from "../../sanityconfig";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className="product">
      {product && (
        <>
          <div className="left">
            <div className="image">
              <Image
                src={product.productImage}
                layout="fill"
                alt="Product"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="right">
            <h1>{product.title}</h1>
          </div>
        </>
      )}
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
  const { slug = "" } = context.params;
  const product = await sanityconfig.fetch(
    `
    *[_type == "products" && slug.current == $slug][0]{slug, "productImage": mainImage.asset->url, title, price, quantity, body}
  `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}
