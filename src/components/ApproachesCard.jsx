import React from "react";
import styles from "../styles/approches.module.css";

const ApproachesCard = ({ approach }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>{approach.title}</h3>
          <p>{approach.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachesCard;
