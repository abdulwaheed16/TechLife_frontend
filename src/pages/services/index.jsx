import { useRouter } from "next/router";
import { useEffect } from "react";
import { services } from "@/data/services-data/services";
import { Container, Row, Col } from "react-bootstrap";
import Service from "@/components/Service";

const ServicesPage = ({}) => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
          <div key={index} id={service.slug} className={"service"}>
            <Service service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
