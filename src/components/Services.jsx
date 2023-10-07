import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import "../styles/Home.module.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import ai_service_image from "../../public/AI_service_image.jpeg";
import colorSharp from "../assets/img/color-sharp.png";
import Image from "next/image";
import { Stack, Row, Col, Container } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import DividerWhite from "./ui/Dividers";

export const Services = () => {
  const services = new Array(6).fill(ai_service_image);
  return (
    <section className="services section-devider">
      <Container className="mx-auto">
        <div className="text-center">
          <h2 className="title mt-4">Our Services</h2>
          <p className="pt-2 pb-4 services-description">
            Empower your business with AI solutions for enhanced customer
            support and data-driven insights. Craft captivating websites and web
            applications that leave a lasting impression and drive results.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} xl={4} className="justify-content-center">
          {services?.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Row>
      </Container>
      <DividerWhite />
    </section>
  );
};
