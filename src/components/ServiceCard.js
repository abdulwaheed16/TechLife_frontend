import { Col } from "react-bootstrap";
import Image from "next/image";
import webImage from "/public/web-development.jpeg";
import Link from "next/link";
import { useRouter } from "next/router";

export const ServiceCard = ({ service }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/#${3}`);
  };

  return (
    <div className="service-card">
      <Col className="text-center my-4  ">
        <div className="">
          <Image src={webImage} alt="Image" className="image" width={260} />
        </div>
        <div className="service-view-button">
          <button onClick={handleClick} className="">
            View
          </button>
        </div>
      </Col>
    </div>
  );
};
