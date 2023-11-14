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

const OurTeamCard = ({ team_member }) => {
  return (
    <>
      <div className={styles.team_card}>
        <div className={styles.blob}>
          <div className={styles.team_member_img_wrapper}>
            {" "}
            <Image
              src={team_member.imageUrl}
              alt={team_member.name}
              width={150}
              height={150}
              className={styles.team_member_img}
            />
          </div>
        </div>
        <div>
          <p className={styles.member_name}>{team_member.name}</p>
          <p className={styles.member_role}>{team_member.role}</p>
        </div>
        {/* Showing Meet button for specific employee */}
        <div className={styles.buttons}>
          {team_member.canMeet && (
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
    </>
  );
};

export default OurTeamCard;
