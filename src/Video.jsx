<video muted autoPlay loop src="noloop.mp4"></video>;
import React from "react";

const Video = ({ src }) => {
  return <video width="600" muted autoPlay controls src={src} />;
};

export default Video;
