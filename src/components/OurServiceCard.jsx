import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export const OurServiceCard = ({ service }) => {
  console.log("Service: ", service);
  return (
    <Col size={12} sm={6} lg={4} className="">
      <div className="proj-imgbx project-card">
        <Image src={service.image} className="project-img" />
        <div className="proj-txtx">
          <h4>{service.title}</h4>
          <span>{service.super_desc}</span>
          <div className="block py-4">
            <Link
              href={`/services/#${service.slug}`}
              className="project-card-button"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
