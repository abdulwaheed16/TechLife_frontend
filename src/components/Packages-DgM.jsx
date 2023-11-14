import React from "react";
import { Row, Col } from "react-bootstrap";
import PackagesCardDgM from "./PackagesCard-DgM";
import styles from "../styles/packages.module.css";

const PackagesDgM = ({ service_package, service_title }) => {
  console.log("Service Sub Packages: ", service_package?.sub_packages);
  return (
    <div>
      {" "}
      <h3 className={styles.package_name}>{service_package?.package_name}</h3>
      <Row xs={1} lg={3} className={styles.sub_packages_row}>
        {service_package?.sub_packages?.map((service_sub_package, index) => (
          <Col xs={12} key={index}>
            <PackagesCardDgM
              service_sub_package={service_sub_package}
              service_title={service_title}
              package_title={service_package?.package_name}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PackagesDgM;
