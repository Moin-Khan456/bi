import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const images = [
  {
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/leadership.png",
    alt: "Image 1",
    width: 400,
    height: 300,
  },
  {
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/leadership.png",
    alt: "Image 2",
    width: 400,
    height: 300,
  },
  {
    src: "https://d1u4arv5y5eda6.cloudfront.net/images/leadership.png",
    alt: "Image 3",
    width: 400,
    height: 300,
  },
];

const CarouselComponent = () => {
  return (
    <div className="relative h-[10px] lg:h-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showArrows={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;