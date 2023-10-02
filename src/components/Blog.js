import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlogCard } from "./BlogCard"; // Import your BlogCard component

const BlogList = () => {
  return (
    <div className="blogsComponent">
      <h2 className="text-start">Our Blogs</h2>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 blogs">
        <Col className="blog">
          <BlogCard />
        </Col>
        <Col className="blog">
          <BlogCard />
        </Col>
        <Col className="blog">
          <BlogCard />
        </Col>
        <Col className="blog">
          <BlogCard />
        </Col>
        <Col className="blog">
          <BlogCard />
        </Col>
        <Col className="blog">
          <BlogCard />
        </Col>
      </Row>
    </div>
  );
};

export default BlogList;
