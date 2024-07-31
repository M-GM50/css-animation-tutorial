import React, { useRef, useState } from "react";

const Slider = () => {
  const videoRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
    const video = videoRef.current;
    video.currentTime = newValue;
  };

  return (
    <div>
      <small>Use the slider to control the animation</small>
      <br />
      <input
        className="slider"
        type="range"
        min="0"
        step="0.1"
        max="8"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <video ref={videoRef} width="600" muted src="/day-to-night.mp4" />
    </div>
  );
};

export default Slider;
