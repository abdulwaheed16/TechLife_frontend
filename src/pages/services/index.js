// pages/services/[serviceId].js

import { useRouter } from "next/router";
import { services } from "@/mock/mock-data";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import web_developmentImage from "/public/web-development.jpeg";
import Service from "./Service";

const ServiceDetail = ({}) => {
  const service = {
    title: "Web Design & Development",
    description:
      "Crafting beautiful and functional websites. Crafting beautiful and functional websites. Crafting beautiful and functional websites. Crafting beautiful and functional websites. Crafting beautiful and functional websites. Crafting beautiful and functional websites. Crafting beautiful and functional websites.Crafting beautiful and functional websites. ",
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
      <div className="service-page-inner" style={{ width: "90%" }}>
        <h1>Services</h1>
        <div className="description-main">
          <p>{service.description.substring(1, 120)}</p>
        </div>
        {/* all services available */}
        {services.map((service, index) => (
          <div key={index} id={service.id}>
            <Service service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
