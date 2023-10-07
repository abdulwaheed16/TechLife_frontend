import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlogCard } from "./BlogCard";
import { blogs } from "@/mock/mock-data";

const BlogList = () => {
  return (
    <div className="blogsComponent section-devider">
      <h2 className="">Our Blogs</h2>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 blogs">
        {blogs?.map((blog, index) => (
          <Col className="blog" key={index}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogList;
