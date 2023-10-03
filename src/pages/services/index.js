// pages/services/[serviceId].js

import { useRouter } from "next/router";
import { services } from "@/mock/mock-data";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import web_developmentImage from "/public/web-development.jpeg";

const ServiceDetail = ({}) => {
  const service = {
    title: "Web Design & Development",
    description: "Crafting beautiful and functional websites.",
    benefits: [
      "Responsive design",
      "User-friendly interfaces",
      "High-performance websites",
    ],
    price: "$XXXX",
  };
  console.log(service);
  return (
    <div className="service-page">
      {/* <Container className="container">
        <Row xs={1} md={2} className="row1">
          <Col className="service-details">
            <h1 className="text-center mb-4">{service.title}</h1>
            <p>{service.description}</p>
          </Col>
          <Col>
            <Image src={web_developmentImage} alt={service.title} fluid />
          </Col>
        </Row>
      </Container> */}
      {services.map((service) => (
        <>
          <h2 id={service.id}>
            service-{service.id} {service.title}
          </h2>
          <p>
            <span className="" style={{ color: "yellow" }}>
              Testing . . .
            </span>
            {service.description.concat(
              "We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support.  We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support. We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support. We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support. We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support. We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support. We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support. We offer a comprehensive range of web development services to help businesses of all sizes create and maintain their online presence. Our team of experienced and skilled web developers can help you with everything from designing and developing your website to optimizing it for search engines and providing ongoing maintenance and support."
            )}
          </p>
        </>
      ))}
    </div>
  );
};

export default ServiceDetail;
