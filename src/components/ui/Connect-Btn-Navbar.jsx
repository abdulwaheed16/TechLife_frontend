import React from "react";
import styles from "../../styles/ui/connect-btn-nav.module.css";
import { useRouter } from "next/router";

const ConnectBtnNavbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("//#connect");
  };
  return (
    <div className="nav-contact">
      <span className="nav-phone-number">+1 ( 737 ) 313 1967 </span>
      <button
        className={styles.button}
        onClick={() => {
          handleClick();
        }}
      >
        Lets Connect
      </button>
    </div>
  );
};

export default ConnectBtnNavbar;
