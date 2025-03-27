import Image from "next/image";
import React from "react";

const Card = (props) => {
  const isVideo = typeof props.image === "string" && props.image.endsWith(".mp4");

  return (
    <a href={props.link} className="block">
      <div className="relative group">
        {isVideo ? (
          <video
            className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105 w-full"
            muted
            loop
            autoPlay
            controls={false}
            poster={props.poster}
          >
            <source src={props.image} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={props.image}
            alt={props.title}
            className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            width={500}
            height={300}
            layout="responsive" 
          />
        )}

        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold Gilroy-Bold">
            {props.title}
          </h3>
          <p className="text-gray-500 text-base sm:text-lg">{props.subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
