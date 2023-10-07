import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import robotImage from "../assets/img/header-img.svg";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} lg={4} className="">
      <div className="proj-imgbx project-card">
        <Image src={imgUrl} className="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="block py-4">
            <Link href={`/portfolio/${1}`} className="project-card-button">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
