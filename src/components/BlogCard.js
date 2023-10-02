import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blogImage1 from "/public/blogImage1.jpeg";
import blogImage2 from "/public/blogImage2.jpeg";
import Image from "next/image";

export const BlogCard = () => {
  return (
    <Card style={{ overflow: "hidden" }}>
      <Image
        src={blogImage2}
        alt=""
        width={287}
        height={200}
        layout="responsive"
        objectFit="cover"
        className="blog-card-img"
      />
      {/* <Card.Img
        variant="top"
        src={blogImage1}
        alt="Here is supposed to image"
      /> */}
      <Card.Body className="blog-card-body">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="">Read More</Button>
      </Card.Body>
    </Card>
  );
};
