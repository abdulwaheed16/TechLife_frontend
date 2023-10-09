import React from "react";
import styles from "../styles/packages.module.css";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

// const ListItem = () => {
//   return <div>

//   </div>;
// };
const PackagesCard = ({ service_package }) => {
  const package_features = service_package?.features;
  console.log("Features: ", package_features);
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <h3>{service_package?.package_name}</h3>
          <p className={styles.idealFor}>{service_package?.idealFor}</p>
        </div>
        {/* ----------- Features List------------ */}

        <div className={styles.features}>
          <ul>
            {package_features?.map((feature, index) => (
              <li key={index}>
                <span className={styles.bullet}>
                  <FiCheck />
                </span>
                <p className={styles.list_item_content}>
                  <span className={styles.list_heading}>{feature?.title}</span>{" "}
                  <span className={styles.desc}>{feature?.desc}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ----------------Pricing-------------- */}
        <div className={styles.price_wrapper}>
          <div className={styles.price}>
            <span className={styles.oldPrice}>$120</span>
            <span className={styles.newPrice}>$60</span>
          </div>
        </div>
        <div className={styles.button_wrapper}>
          <Link href={`/`} className={styles.button}>
            Get Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
