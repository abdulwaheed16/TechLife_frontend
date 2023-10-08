import React from "react";
import { Col, Row } from "react-bootstrap";
import ApproachesCard from "./ApproachesCard";

const Approaches = ({ ourApproaches }) => {
  //   console.log("Approaches: ", ourApproaches);
  return (
    <>
      <Row>
        {ourApproaches?.map((approach, index) => (
          <Col xs={12} sm={6} xl={4} xxxl={2} key={index}>
            <ApproachesCard approach={approach} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Approaches;
