import Image from "next/image";
import { useState } from "react";
const PreviewData = () => {
  // We show 4 pictures, each needs a way for the state to say which one is on top
  // There will be a huge Image at the top then 4 of the pictures at the bottom
  const [pickedImage, setPickedImage] = useState(1);

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
            <Image
              src={images[2].src}
              alt="Product Image"
              width="300"
              height="300"
              objectFit="cover"
              objectPosition="left"
            />
          </div>
          <div className="bottomImages">
            {images.map((image, index) => (
              <Image
                src={image.src}
                width="50"
                height="50"
                alt="image"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="display"></div>
    </>
  );
};
export default PreviewData;
