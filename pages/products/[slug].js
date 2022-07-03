// NextJS Imports
import Image from "next/image";
import Link from "next/link";
//React Imports & Libraries
import { useContext } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
// Sanity Imports
import sanityconfig from "../../sanityconfig";
//Components Imports
import { ProductsContext } from "../../components/ProductsProvider";


const Product = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
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
            <SanityBlockContent
              blocks={product.body}
              serializers={serializers}
            />
            <span>{`Price: R${product.price}`}</span>
            <span>{`Quantity Available: ${product.quantity}`}</span>

            <button
              onClick={() => {
                dispatch({
                  type: "ADDED_AN_ITEM_TO_CART",
                  payload: {
                    title: product.title,
                    slug: product.slug.current,
                    id: product._id,
                    image: product.productImage,
                    price: product.price,
                    body: product.body,
                  },
                });
              }}
            >
              Add To Cart
            </button>
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
