import Image from "next/image";
import Link from "next/link";
const CustomImage = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card__image">
        <Image
          src={data.ProductImage}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2>
        <Link href={data.slug.current}>{data.title}</Link>
      </h2>
      <span>{`Quantity: ${data.quantity}`}</span>
      <span>{`Price: R${data.price}`}</span>
      <div className="card__buttons">
        <button className="card__buttons__add">Add To Cart</button>
        <Link href="/checkout" className="card__buttons__checkout">
          Add and Checkout
        </Link>
      </div>
    </div>
  );
};
export default CustomImage;
