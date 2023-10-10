// pages/services/[serviceId].js

import { useRouter } from "next/router";
// import { services } from "@/mock/mock-data";
import { services } from "@/data/services-data/services";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import web_developmentImage from "/public/web-development.jpeg";
import Service from "@/components/Service";
import { useEffect } from "react";
import BackToTopBtn from "@/components/ui/BackToTop-Btn";

const ServicesPage = ({}) => {
  const router = useRouter();

  const { slug } = router.query;
  useEffect(() => {
    if (slug) {
      window.scrollTo = {
        top: document.getElementById(slug).offsetTop,
        behavior: "smooth",
      };
      console.log("Service Id: ", slug);
    }
  }, [slug]);
  return (
    <div className="service-page">
      <div className="service-page-inner">
        <h1>Services</h1>
        <div className="description-main">
          <p>
            Experience the art of web development, where creativity meets
            technology to bring your ideas to life
          </p>
        </div>
        {/* all services available */}
        {services.map((service, index) => (
          <div key={index} id={`${service.slug}`}>
            <Service service={service} />
            {/* <div className="service-devider"></div> */}
          </div>
        ))}
      </div>
      {/* <BackToTopBtn /> */}
    </div>
  );
};

export default ServicesPage;
