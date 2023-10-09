import React from "react";
import { Col, Row } from "react-bootstrap";
import BenifitsCard from "./BenifitsCard";
import styles from "../styles/approches.module.css";

const Benifits = ({ benifits }) => {
  //   console.log("Approaches: ", ourApproaches);
  return (
    <Row>
      <h3 className="benifits_heading">Why You Should Choose Us</h3>
      {benifits?.map((benifit, index) => (
        <Col xs={12} sm={6} xl={4} xxxl={2} key={index}>
          <BenifitsCard benifit={benifit} />
        </Col>
      ))}
    </Row>
  );
};

export default Benifits;
