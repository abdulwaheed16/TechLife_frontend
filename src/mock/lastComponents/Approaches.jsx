import { Row, Container } from "react-bootstrap";
import { ApproachesCard } from "./ApproachesCard";
import DividerWhite from "../../components/ui/Dividers";
import styles from "../../styles/Services.module.css";
import { ourServices } from "@/data/services-data/our-services";

export const Approaches = () => {
  console.log("Our Serviecs ", ourServices);

  return (
    <section className={`${styles.approaches} section-devider`}>
      <Container className="mx-auto">
        <div className="text-center">
          <h2 className="">Our Services</h2>
        </div>
        <Row xs={1} md={2} lg={3} xl={3} className={styles.cards}>
          {ourServices?.map((service, index) => (
            <ApproachesCard key={index} service={service} />
          ))}
        </Row>
      </Container>
      <DividerWhite />
    </section>
  );
};
