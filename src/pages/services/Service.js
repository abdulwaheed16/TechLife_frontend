import React from "react";
import { useRouter } from "next/router";
import { services } from "@/mock/mock-data";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import web_developmentImage from "/public/web-development.jpeg";
import webImage from "/public/web_development.jpg";

const Service = ({ service }) => {
  return (
    <Container>
      <Row>
        <h2 className="title">{service.title}</h2>
        <Col className="service-content">
          <div className="">
            {/* <h3>About service</h3> */}
            <p>{service.description}</p>
          </div>
          <div>
            <h3>Why You should take service</h3>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li>{benefit}</li>
              ))}
            </ul>
          </div>
        </Col>
        <Col className="service-img">
          <div>
            <Image src={webImage} width={350} />
          </div>
        </Col>{" "}
      </Row>

      {/* Related Projects  */}
      <div className="related-projects">
        <h3>Related Projects</h3>
        {/* <div className="prev-button" onClick={() => scrollProjects("prev")}>
        {"<"}
      </div> */}
        <div className="projects">
          <div>
            <Image src={web_developmentImage} />
          </div>
          <div>
            <Image src={web_developmentImage} />
          </div>
          <div>
            <Image src={web_developmentImage} />
          </div>
          <div>
            <Image src={web_developmentImage} />
          </div>
          <div>
            <Image src={web_developmentImage} />
          </div>
        </div>
        {/* <div className="next-button" onClick={() => scrollProjects("next")}>
        {"<"}
      </div> */}
      </div>

      {/* Pricing and CTA */}

      <div className="pricing">
        <Link href={`//#connect`} className="button">
          Get Now
        </Link>
        <h4>
          <span className="only-text">Starting at </span>{" "}
          <span className="price">{`$ 102`}</span>{" "}
        </h4>
      </div>
    </Container>
  );
};

export default Service;
