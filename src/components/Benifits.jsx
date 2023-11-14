import React from "react";
import { Col, Row } from "react-bootstrap";
import BenifitsCard from "./BenifitsCard";
import styles from "../styles/approches.module.css";

const Benifits = ({ benifits, service_title }) => {
  //   console.log("Approaches: ", ourApproaches);
  const isFullWidth = service_title === "Human Resource Outsourcing";

  return (
    <Row>
      <h3 className="benifits_heading">Why You Should Choose Us</h3>
      {benifits?.map((benifit, index) => (
        <Col xs={12} sm={6} xl={isFullWidth ? 6 : 4} xxxl={2} key={index}>
          <BenifitsCard benifit={benifit} service_title={service_title} />
        </Col>
      ))}
    </Row>
  );
};

export default Benifits;
