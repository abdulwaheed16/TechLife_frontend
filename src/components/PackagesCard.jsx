import React from "react";
import styles from "../styles/packages.module.css";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import GetNowBtn from "./ui/Get-Now-Btn";

// const ListItem = () => {
//   return <div>

//   </div>;
// };
const PackagesCard = ({
  service_package,
  service_sub_package,
  service_title,
}) => {
  const package_features = service_package?.features;
  // console.log("Features: ", package_features);
  //   if (service_sub_package) {
  //     service_package = service_sub_package;
  //   }
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

        {service_package?.customPrice ? (
          <div className={styles.customPrice}>
            <h3>
              Custom Price <span>{service_package?.customPrice}</span>
            </h3>
          </div>
        ) : (
          <div className={styles.price_wrapper}>
            <div className={styles.price}>
              <span className={styles.oldPrice}>
                ${service_package.oldPrice}
              </span>
              <span className={styles.newPrice}>
                ${service_package.newPrice}
              </span>
            </div>
          </div>
        )}
        {/* ---------------get a quote---------------- */}
        <div className={styles.button_wrapper}>
          <GetNowBtn
            service={service_title}
            plan={service_package?.package_name}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
