import React from "react";
import { Col, Row } from "react-bootstrap";
import ApproachesCard from "./ApproachesCard";

const Approaches = ({ ourApproaches, outsourcing }) => {
  //   console.log("Approaches: ", ourApproaches);
  if (outsourcing) {
    return (
      <Row>
        <h3 className="ourApproaches_heading">Our Outsourced Services</h3>
        {outsourcing?.map((outsourced_service, index) => (
          <Col xs={12} sm={6} xl={4} xxxl={2} key={index}>
            <ApproachesCard outsourced_service={outsourced_service} />
          </Col>
        ))}
      </Row>
    );
  } else {
    return (
      <Row>
        <h3 className="ourApproaches_heading">Our Approaches</h3>
        {ourApproaches?.map((approach, index) => (
          <Col xs={12} sm={6} xl={4} xxxl={2} key={index}>
            <ApproachesCard approach={approach} />
          </Col>
        ))}
      </Row>
    );
  }
};

export default Approaches;
