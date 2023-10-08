import React from "react";
import styles from "../styles/approches.module.css";
import { FiCheck } from "react-icons/fi";

// Here benifits and approaches cards are of same styling.
const BenifitsCard = ({ benifit }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <FiCheck size={36} color="white" className={styles.icon} />
          <h3>{benifit.title}</h3>
          <p>{benifit.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenifitsCard;
