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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            magnam recusandae laboriosam cupiditate minus facilis, soluta sequi{" "}
            <span className={styles.our_aim}>Our Aim</span> is accusantium
            placeat minus enim, similique pariatur veniam sunt. Blanditiis quo
            dolor cupiditate ad?
          </p>
        </Row>
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
                <div className={styles.team_card}>
                  <div className={styles.blob}>
                    <div className={styles.team_member_img_wrapper}>
                      {" "}
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={150}
                        height={150}
                        className={styles.team_member_img}
                      />
                    </div>
                  </div>
                  <div>
                    <p className={styles.member_name}>{member.name}</p>
                    <p className={styles.member_role}>{member.role}</p>
                  </div>
                  {/* Showing Meet button for specific employee */}
                  <div className={styles.buttons}>
                    {member.canMeet && (
                      <Link href={`/`} className={styles.meet_button}>
                        Meet
                      </Link>
                    )}
                    <Link href={`/`} className={styles.profile_button}>
                      Profile{" "}
                      {/* <span>
                        <BsBoxArrowUpRight />
                      </span> */}
                    </Link>
                  </div>
                  {/* profile */}
                  <div></div>
                  <div className={styles.social_link}>
                    <Link
                      href={`/`}
                      className={styles.link}
                      style={{ backgroundColor: "#0866FF" }}
                    >
                      <FaDiscord color="white" />
                    </Link>
                    <Link
                      href={`/`}
                      className={styles.link}
                      style={{ backgroundColor: "black" }}
                    >
                      <FaGithub color="white" />
                    </Link>
                    <Link
                      href={`/`}
                      className={styles.link}
                      style={{ backgroundColor: "#0A66C2" }}
                    >
                      <BiLogoLinkedin color="white" />
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
