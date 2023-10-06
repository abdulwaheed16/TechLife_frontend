import React from "react";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import projectImage from "../assets/img/project-img1.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Devider from "./Devider";
import styles from "../styles/Portfolio.module.css";

export const RelatedProjectCard = ({ projects }) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.card_img_wrapper}>
        <Image src={projectImage} alt="" className={styles.card_img} />
      </div>

      <div className={styles.card_content_wrapper}>
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>Project Title</h3>
          <p className={styles.card_info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href={`/#connect`} className={styles.card_cta}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
