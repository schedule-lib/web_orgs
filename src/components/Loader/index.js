import React from "react";
import Lottie from "react-lottie";

import animationData from "../../lotties/tricube-loader.json";
import styles from "../../styles/components/Loader.module.css";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.loaderContainer}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default Loader;
