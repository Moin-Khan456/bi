import React from 'react';

const Card = (props) => {
  console.log("src:- ", props.image)
  return (
    <a href={props.link}>
      <div className={`card my-4 relative w-[80vw] md:w-[380px] lg:w-[660px] xs:h-80 ${props.number % 2 !== 0 ? "lg:pr-8" : "lg:pl-8"}`}>
       <video
          className='rounded-3xl'
          muted
          loop
          autoPlay={true}
          controls={false}
          poster={props.poster}
          preload="metadata"
        >
          <source
            src={props.image}
            type="video/mp4"
          />
        </video>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-subtitle">{props.subtitle}</h4>
        </div>
      </div>
    </a>
  );
};

export default Card;
