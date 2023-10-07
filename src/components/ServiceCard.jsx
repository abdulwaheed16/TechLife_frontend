import { Col } from "react-bootstrap";
import Image from "next/image";
import webImage from "/public/web_development.png";
import styles from "../styles/Services.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const ServiceCard = ({ service }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/#${3}`);
  };
  // const service_route = service.title.toLowerCase();
  return (
    <>
      <Col className={styles.our_service_card_wrapper}>
        <div className={styles.our_service_card}>
          <div className={styles.img_wrapper}>
            <Image src={service.image} alt="" className={styles.img} />
          </div>
          <h2>{service.title}</h2>
          <p>{service.super_desc}</p>
          <Link
            href={`/services/#${service.slug}`}
            className={styles.view_more_btn}
          >
            View More
          </Link>
        </div>
      </Col>
    </>
  );
};
