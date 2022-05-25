import Image from "next/image";
import sanityconfig from "../sanityconfig";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className="product">
      {product && (
        <>
          <div className="headings">
            <h1>{product.title}</h1>
            <h1>Product</h1>
            <div className="headings__buttons">
              <Link href="/cart">Add to card</Link>
              <Link href="/add">Add and Checkout</Link>
            </div>
          </div>
          <div className="image">
            <Image
              src={product.productImage}
              // src="/eggs.jpg"
              layout="fill"
              objectFit="cover"
              alt="Product Photo"
            />
          </div>
          <div className="details">
            <span>{`Price: R${product.price}`}</span>
            {/* <span className="details__price">Price: 200</span> */}
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              laboriosam ea facilis porro alias unde, eveniet quae ipsa ab!
              Quibusdam laudantium ducimus officia perferendis dolorum corporis
              ipsum earum. Nam, illo.
            </p>
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
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const product = await sanityconfig.fetch(
    `
    *[_type == "products" && slug.current == $slug][0]{slug, "productImage": mainImage.asset->url, title, price, quantity}
  `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}
