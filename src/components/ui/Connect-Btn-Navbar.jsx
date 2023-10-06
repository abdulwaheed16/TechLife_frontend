import React from "react";
import styles from "../../styles/ui/connect-btn-nav.module.css";
import { useRouter } from "next/router";

const ConnectBtnNavbar = () => {
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
      Let's Connect
    </button>
  );
};

export default ConnectBtnNavbar;
