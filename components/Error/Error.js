import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";

function Error() {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <LottieView
    style={{
        width: 200,
        height: 200,
        backgroundColor: '#eee'
    }}
      ref={animation}
      source={require("../../assets/error.json")}
      autoPlay
      loop
    />
  );
}

export default Error;
