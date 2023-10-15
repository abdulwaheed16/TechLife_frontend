import React from "react";
import styles from "../../styles/ui/get-now-btn.module.css";
import { useRouter } from "next/router";

const GetNowBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("//#connect");
  };
  return (
    <div className={styles.button_wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          handleClick();
        }}
      >
        Get Now
      </button>
    </div>
  );
};

export default GetNowBtn;
