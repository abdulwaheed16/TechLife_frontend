import React from "react";
import { useRouter } from "next/router";
import { services } from "@/mock/mock-data";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Devider from "@/components/Devider";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/mock/mock-data";
import web_developmentImage from "/public/web-development.jpeg";
import webImage from "/public/web_development.jpg";
import { RelatedProjectCard } from "@/components/Related-Project-Card";
import { FiCheck } from "react-icons/fi";
import DarkVariantExample from "@/mock/Carousel";

const Service = ({ service }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <Row className="service-header">
        <Col xs={12} md={8}>
          <h2 className="title">{service.title}</h2>
        </Col>
        <Col xs={12} md={2}>
          <div className="pricing">
            <h4>
              <span className="only-text">Starting at </span>{" "}
              <span className="price">{`$102`}</span>{" "}
            </h4>
            <Link href={`//#connect`} className="button">
              Get Now
            </Link>
          </div>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col className="service-content">
          <div className="description">
            {/* <h3>About service</h3> */}
            <p>{service.description}</p>
          </div>
          <div>
            <h3>Why You should take our service</h3>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li>
                  <FiCheck className="listItem-icon" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col>
          <div>
            <Image src={webImage} className="service-img" />
          </div>
        </Col>
      </Row>

      {/* Related Projects  */}
      {/* <RelatedProjectCard projects={projects} /> */}
      {/* Pricing and CTA */}
    </Container>
  );
};

export default Service;
