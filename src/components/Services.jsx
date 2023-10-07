import { Row, Container } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import DividerWhite from "./ui/Dividers";
import styles from "../styles/Services.module.css";
import { ourServices } from "@/data/services";

export const Services = () => {
  console.log("Our Serviecs ", ourServices);

  return (
    <section className={`${styles.services} section-devider`}>
      <Container className="mx-auto">
        <div className="text-center">
          <h2 className="">Our Services</h2>
        </div>
        <Row xs={1} md={2} lg={3} xl={3} className={styles.cards}>
          {ourServices?.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Row>
      </Container>
      <DividerWhite />
    </section>
  );
};
