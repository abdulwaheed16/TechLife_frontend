import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image_404 from "/public/image_404.jpeg";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="page_404">
      <div className="inner_section">
        <Container>
          <Row>
            <Col className="text-center">
              <Image
                src={image_404}
                alt="404 Not Found"
                width={200}
                height={200}
                className="image_404"
              />
              <h1>404 Not Found</h1>
              <p>This page does not exist.</p>

              {/* <Link href="/"></Link> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NotFoundPage;
