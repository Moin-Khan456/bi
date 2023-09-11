import React from "react";

function video(props) {
  return (
    <div>
      <video
        muted
        loop
        autoPlay={true}
        controls={false}
        poster="https://d1u4arv5y5eda6.cloudfront.net/images/c-video-thumbnail.png"
      >
        <source
          src="https://d1u4arv5y5eda6.cloudfront.net/videos/aboutvideo.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
export default video;
