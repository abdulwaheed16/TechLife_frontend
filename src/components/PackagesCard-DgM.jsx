import React from "react";
import styles from "../styles/packages.module.css";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import GetNowBtn from "./ui/Get-Now-Btn";

const PackagesCardDgM = ({
  service_sub_package,
  service_title,
  package_title,
}) => {
  const package_features = service_sub_package?.features;
  console.log("Sub Package Name: ", service_sub_package?.sub_package_name);
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <h3 className={styles.sub_package_name}>
            {service_sub_package?.sub_package_name}
          </h3>
        </div>
        {/* ----------- Features List------------ */}

        <div className={styles.features}>
          <ul>
            {service_sub_package?.features?.map((feature, index) => (
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

        {service_sub_package?.customPrice ? (
          <div className={styles.customPrice}>
            <h3>
              Custom Price <span>{service_sub_package?.customPrice}</span>
            </h3>
          </div>
        ) : (
          <div className={styles.price_wrapper}>
            <div className={styles.price}>
              <span className={styles.oldPrice}>
                ${service_sub_package.oldPrice}
              </span>
              <span className={styles.newPrice}>
                ${service_sub_package.newPrice}
              </span>
            </div>
          </div>
        )}
        {/* ---------------get a quote---------------- */}
        <div className={styles.button_wrapper}>
          <GetNowBtn
            service={service_title}
            plan={package_title}
            sub_plan={service_sub_package?.sub_package_name}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesCardDgM;
