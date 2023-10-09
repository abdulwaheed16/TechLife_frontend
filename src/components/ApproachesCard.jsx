import React from "react";
import styles from "../styles/approches.module.css";

const ApproachesCard = ({ approach, outsourced_service }) => {
  if (outsourced_service) {
    return (
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h3>{outsourced_service.title}</h3>
            <p>{outsourced_service.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
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
  }
};

export default ApproachesCard;
