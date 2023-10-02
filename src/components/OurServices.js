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

export const OurServices = () => {
  const services = new Array(6).fill(ai_service_image);
  return (
    <section className="ourServices">
      <Container className="mx-auto">
        <div className="text-center">
          <h2 className="title mt-4">Our Services</h2>
          <p className="pt-2 pb-4">lorem15</p>
        </div>
        <Row className="justify-content-center">
          {services?.map((service, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="text-center my-2 "
              key={index}
            >
              <div className="">
                <Image src={ai_service_image} alt="Image" className="image" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
