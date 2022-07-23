// NextJS Imports
import Image from "next/image";
//React Imports & Libraries
import { useEffect, useState } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { FaCartPlus } from "react-icons/fa";
// Sanity Imports
import sanityconfig from "../../sanityconfig";
//Components Imports

const Product = ({ product }) => {
  const [pickedImage, setPickedImage] = useState(null);
  useEffect(() => {
    setPickedImage(product.images[0]);
  }, []);
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
      <div className="left">
        <div className="topImage">
          {pickedImage && (
            <>
              <Image
                src={pickedImage}
                alt="Product Image"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className={pickedImage === product.images[0] ? "active" : "off"}
                onClick={() => setPickedImage(product.images[0])}
              />
              <Image
                src={pickedImage}
                alt="Product Image"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className={pickedImage === product.images[1] ? "active" : "off"}
                onClick={() => setPickedImage(product.images[1])}
              />
              <Image
                src={pickedImage}
                alt="Product Image"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className={pickedImage === product.images[2] ? "active" : "off"}
                onClick={() => setPickedImage(product.images[2])}
              />
              <Image
                src={pickedImage}
                alt="Product Image"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className={pickedImage === product.images[3] ? "active" : "off"}
                onClick={() => setPickedImage(product.images[3])}
              />
            </>
          )}
        </div>
        <div className="bottomImages">
          {product &&
            product.images.map((image, index) => (
              <div
                className={
                  pickedImage === image
                    ? "bg-active bottom-image"
                    : "bottom-image"
                }
                key={index}
                onClick={() => {
                  setPickedImage(image);
                }}
              >
                <Image
                  src={image}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
        </div>
      </div>
      {product && (
        <div className="right">
          <h1>{product.title}</h1>
          <SanityBlockContent blocks={product.body} serializers={serializers} />
          <h2>R{product.price}</h2>
          <div className="add-process">
            <div className="add">
              <button>-</button>
              <span className="number">5</span>
              <button>+</button>
            </div>
            <button className="process">
              <FaCartPlus /> Process To Checkout
            </button>
          </div>
        </div>
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
    *[_type == "products" && slug.current == $slug][0]{slug, "productImage": mainImage.asset->url, title, price, quantity, body, "images": gridImages[].asset -> url }
  `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}
