import React from "react";
import PackagesCard from "./PackagesCard";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/packages.module.css";
import PackagesDgM from "./Packages-DgM";

const Packages = ({ packages, service_title }) => {
  // console.log("Packages: ", packages);

  const sub_packages = packages?.map((pack) => pack.sub_packages);
  console.log("***********", sub_packages);
  return (
    <>
      <h3 className="packages_heading">Pick Your Package</h3>

      {/* If packages have subPackages */}

      {/* {sub_packages ? (
        <div className={styles.sub_packages}>
          <h3>{packages?.sub_packages?.sub_package_name}</h3>
          <Row xs={1} lg={2} xxl={2} xxxl={4} className={""}>
            {sub_packages?.map((service_sub_package, index) => (
              <Col>
                <PackagesCard service_sub_package={service_sub_package} />
              </Col>
            ))}
          </Row>
        </div>
      ) : ( */}
      <Row className={""}>
        {packages?.map((service_package, index) => {
          if (service_package?.sub_packages) {
            return (
              <Col xs={12} key={index}>
                <PackagesDgM
                  service_package={service_package}
                  service_title={service_title}
                />
              </Col>
            );
          } else {
            return (
              <Col xs={12} lg={6} xxxl={3} key={index}>
                <PackagesCard
                  service_package={service_package}
                  service_title={service_title}
                />
              </Col>
            );
          }
        })}
      </Row>
      {/* )} */}
    </>
  );
};

export default Packages;
