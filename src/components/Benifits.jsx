import React from "react";
import { Col, Row } from "react-bootstrap";
import BenifitsCard from "./BenifitsCard";
import styles from "../styles/approches.module.css";

const Benifits = ({ benifits }) => {
  //   console.log("Approaches: ", ourApproaches);
  return (
    <>
      <div className={styles.benifits}>
        {benifits?.map((benifit, index) => (
          <div key={index}>
            <BenifitsCard benifit={benifit} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Benifits;
