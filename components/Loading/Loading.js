import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

function Loading() {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#eee",
      }}
      source={require("../../assets/loading.json")}
      loop
    />
  );
}

export default Loading;
