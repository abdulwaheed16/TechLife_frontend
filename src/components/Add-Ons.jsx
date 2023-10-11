import React from "react";
import styles from "../styles/Services.module.css";
import { FiCheck } from "react-icons/fi";

const AddOns = ({ add_ons, service_title }) => {
  return (
    <div className={styles.add_ons}>
      <h3>Additional Services (Optional Add-ons)</h3>
      <div>
        <ul>
          {add_ons?.map((add_on, index) => (
            <div className={styles.list_item}>
              <FiCheck color="#0fff0f" />{" "}
              <li key={index}>
                <span className={styles.title}>{add_on?.title}</span>
                <span className={styles.desc}>{add_on?.desc}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddOns;
