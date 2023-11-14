import React from "react";
import styles from "../../styles/ui/connect-btn-banner.module.css";
import { useRouter } from "next/router";

const ConnectBtnBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("//#connect");
  };
  return (
    <button
      className={styles.button}
      onClick={() => {
        handleClick();
      }}
    >
      {/* Book <span style={{ color: "yellow", margin: "0 5px" }}> Free </span>{" "}
      Consultation */}
      Lets Connect
    </button>
  );
};

export default ConnectBtnBanner;
