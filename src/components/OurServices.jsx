import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { OurServiceCard } from "./OurServiceCard";
import { ourServices } from "@/data/services-data/our-services";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Image from "next/image";

// !IMPORTANT: Projects component is replaced by OurServices, It has only chaneged by its name, styling/styling classes remains same as projects.
const OurServices = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    and sLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <Row className="mt-4">
                    {ourServices.map((service, index) => {
                      return <OurServiceCard key={index} service={service} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Image className="background-image-right" src={colorSharp2}></Image>
    </section>
  );
};

export default OurServices;
