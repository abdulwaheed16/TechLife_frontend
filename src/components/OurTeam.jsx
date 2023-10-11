import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/about-us.module.css";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import emp_image_1 from "../../public/emp_1.jpg";
import emp_image_2 from "../../public/emp_2.jpg";
import OurTeamCard from "./OurTeamCard";

const OurTeam = ({ teamMembers }) => {
  return (
    <div className={styles.our_team}>
      <h2>Our Team</h2>
      <Row>
        {teamMembers.map((member) => (
          <Col
            xs={12}
            // sm={4}
            md={6}
            lg={3}
            className={styles.team_card_wrapper}
            key={member.id}
          >
            <OurTeamCard team_member={member} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurTeam;
