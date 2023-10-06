import React from "react";
import styles from "../../styles/ui/connect-btn-banner.module.css";

const ConnectBtnBanner = () => {
  return (
    <button className={styles.button} onClick={`//#connect`}>
      Lets Connect
    </button>
  );
};

export default ConnectBtnBanner;
