import Image from "next/image";
import Link from "next/link";
const CustomImage = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card__image"><Image src={data.mainImage} alt="Product" layout="fill" objectFit="cover" />
      </div>
      <h2>
        <Link href={data.slug}>{data.title}</Link>
      </h2>
      <div className="card__info">
        {data.categories.map((item, index) =>(
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};
export default CustomImage;
