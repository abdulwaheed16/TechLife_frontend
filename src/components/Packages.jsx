import React from "react";
import PackagesCard from "./PackagesCard";
import { Row, Col } from "react-bootstrap";

const Packages = ({ packages }) => {
  console.log("Packages: ", packages);

  return (
    <Row xs={1} lg={2} xxl={2} xxxl={4} className={""}>
      {packages?.map((service_package, index) => (
        <Col>
          <PackagesCard service_package={service_package} />
        </Col>
      ))}
    </Row>
  );
};

export default Packages;
