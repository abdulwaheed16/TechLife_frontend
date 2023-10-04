import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export const RelatedProjectCard = ({
  title,
  description,
  imgUrl,
  projectUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Image src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="block py-4">
            <Link href={`/portfolio/${1}`} className="btn btn-primary">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
