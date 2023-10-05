import React from "react";
import styles from "../styles/Clients.module.css";
import { Row, Col } from "react-bootstrap";
import { clients } from "@/mock/mock-data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className={styles.clientsPage}>
      <h2 className={styles.title}>Clients</h2>
      <div className={styles.client}>
        {clients.map((client, index) => (
          <div className={styles.client_image_wrapper} key={index}>
            <Image
              src={client.image}
              alt={client.name}
              className={styles.client_image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
