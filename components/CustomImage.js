import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const CustomImage = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <motion.div className="card__image" layoutId={data.slug.current}>
        <Image
          src={data.ProductImage}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <h2>
        <Link href={data.slug.current}>{data.title}</Link>
      </h2>
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
