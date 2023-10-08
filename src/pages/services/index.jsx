// pages/services/[serviceId].js

import { useRouter } from "next/router";
// import { services } from "@/mock/mock-data";
import { services } from "@/data/services-data/services";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import web_developmentImage from "/public/web-development.jpeg";
import Service from "@/components/Service";

const ServiceDetail = ({}) => {
  return (
    <div className="service-page">
      <div className="service-page-inner" style={{ width: "90%" }}>
        <h1>Services</h1>
        <div className="description-main">
          <p>
            Experience the art of web development, where creativity meets
            technology to bring your ideas to life
          </p>
        </div>
        {/* all services available */}
        {services.map((service, index) => (
          <div key={index} id={service.id}>
            <Service service={service} />
            {/* <div className="service-devider"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
