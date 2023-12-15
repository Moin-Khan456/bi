import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const images = [
  {
    src: "https://braininventory.s3.us-east-2.amazonaws.com/images/leadership.png",
    alt: "Custom Software Development Company | Hire Software Developers",
    width: 400,
    height: 300,
  },
  {
    src: "https://braininventory.s3.us-east-2.amazonaws.com/images/leadership.png",
    alt: "Custom Software Development Company | Hire Software Developers",
    width: 400,
    height: 300,
  },
  {
    src: "https://braininventory.s3.us-east-2.amazonaws.com/images/leadership.png",
    alt: "Custom Software Development Company | Hire Software Developers",
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
            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;