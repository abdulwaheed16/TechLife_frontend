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
import OurTeam from "./OurTeam";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      canMeet: true,
      imageUrl: emp_image_1,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Bussiness Developer",
      canMeet: true,
      imageUrl: emp_image_2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Lead Developer",
      canMeet: false,
      imageUrl: emp_image_2,
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "CTO",
      canMeet: false,
      imageUrl: emp_image_1,
    },
    {
      id: 5,
      name: "Alice Johnson",
      role: "Lead Developer",
      canMeet: false,
      imageUrl: emp_image_2,
    },
  ];

  return (
    <section id="about-us" className={styles.about_us}>
      <h2>About Us</h2>
      <Container>
        <Row className={styles.our_company}>
          <p>
            At <span>Techlife, a Wyoming, US based LLC</span>, our mission is to
            empower businesses through digital excellence. We are committed to
            delivering innovative and customised IT solutions, including web,
            app, and game development, as well as cutting-edge business
            intelligence dashboards.
          </p>
          <p>
            By leveraging our expertise, creativity, and technical proficiency,
            we enable businesses to thrive in the digital landscape. We strive
            to exceed client expectations by providing top-notch services that
            transform ideas into impactful digital experiences. With a focus on
            quality, collaboration, and continuous improvement, we aim to be the
            trusted partner that businesses rely on to achieve their digital
            ambitions and drive sustainable growth in the ever-evolving
            technology realm
          </p>
        </Row>
        {/* <OurTeam teamMembers={teamMembers} /> */}
      </Container>
    </section>
  );
};

export default AboutUs;
