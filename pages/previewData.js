import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
const PreviewData = () => {
  // We show 4 pictures, each needs a way for the state to say which one is on top
  // There will be a huge Image at the top then 4 of the pictures at the bottom
  const [pickedImage, setPickedImage] = useState(null);
  useEffect(() => {
    setPickedImage(images[0].src);
  }, []);

  const images = [
    { id: 1, src: "/cleaning.jpg" },
    { id: 2, src: "/dog.jpg" },
    { id: 3, src: "/baby.jpg" },
    { id: 4, src: "/bread.jpg" },
  ];
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="topImage">
            {pickedImage && (
              <>
                <Image
                  src={pickedImage}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={pickedImage === images[0].src ? "active" : "off"}
                  onClick={() => setPickedImage(images[0].src)}
                />
                <Image
                  src={pickedImage}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={pickedImage === images[1].src ? "active" : "off"}
                  onClick={() => setPickedImage(images[1].src)}
                />
                <Image
                  src={pickedImage}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={pickedImage === images[2].src ? "active" : "off"}
                  onClick={() => setPickedImage(images[2].src)}
                />
                <Image
                  src={pickedImage}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={pickedImage === images[3].src ? "active" : "off"}
                  onClick={() => setPickedImage(images[3].src)}
                />
              </>
            )}
          </div>
          <div className="bottomImages">
            {images.map((image, index) => (
              <div
                className={
                  pickedImage === image.src
                    ? "bg-active bottom-image"
                    : "bottom-image"
                }
                key={index}
                onClick={() => {
                  setPickedImage(image.src);
                }}
              >
                <Image
                  src={image.src}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <h1>Product</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est
            iure quos impedit praesentium tenetur veniam quo dignissimos magnam
            consequatur maiores dolorum facere enim cumque modi dolor id
            corrupti maxime a beatae, accusantium illo nulla? Quibusdam, est
            quaerat omnis harum, rerum ea architecto debitis commodi mollitia
            eligendi quam nemo illo?
          </p>
          <h2>R300</h2>
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
      </div>
      <div className="display"></div>
    </>
  );
};
export default PreviewData;
