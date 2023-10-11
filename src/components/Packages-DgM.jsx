import React from "react";
import { Row, Col } from "react-bootstrap";
import PackagesCardDgM from "./PackagesCard-DgM";

const PackagesDgM = ({ service_package, service_title }) => {
  console.log("Service Sub Packages: ", service_package?.sub_packages);
  return (
    <div>
      {" "}
      <h3 style={{ textAlign: "center", padding: "10px" }}>
        {service_package?.package_name}
      </h3>
      <Row xs={1} lg={3} className={""}>
        {service_package?.sub_packages?.map((service_sub_package, index) => (
          <Col xs={12} key={index}>
            <PackagesCardDgM
              service_sub_package={service_sub_package}
              service_title={service_title}
              sub_service_title={service_sub_package?.package_name}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PackagesDgM;
