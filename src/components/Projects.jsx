import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import robotImage from "../assets/img/header-img.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Image from "next/image";

export const Projects = () => {
  const desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type";
  const projects = [
    {
      title: "Business Startup",
      description: desc,
      imgUrl: projImg1,
      projectUrl: "",
    },
    {
      title: "Business Startup",
      description: desc,
      imgUrl: projImg2,
      projectUrl: "",
    },
    {
      title: "Business Startup",
      description: desc,
      imgUrl: projImg3,
      projectUrl: "",
    },
    {
      title: "Business Startup",
      description: desc,
      imgUrl: robotImage,
      projectUrl: "",
    },
    {
      title: "Business Startup",
      description: desc,
      imgUrl: projImg2,
      projectUrl: "",
    },
    {
      title: "Business Startup",
      description: desc,
      imgUrl: projImg3,
      projectUrl: "",
    },
  ];

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
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
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
