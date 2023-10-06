import React from "react";
import styles from "../../styles/ui/connect-btn-nav.module.css";

const ConnectBtnNavbar = () => {
  return (
    <button className={styles.button} onClick={`//#connect`}>
      Let's Connect
    </button>
  );
};

export default ConnectBtnNavbar;
