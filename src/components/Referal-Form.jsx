import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/ui/connect-btn-banner.module.css";
import refer_styles from "../styles/Refer.module.css";

function ReferalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className={styles.button}>
        Get Now
      </Button>

      <Modal show={show} onHide={handleClose} className={refer_styles.model}>
        <Modal.Header closeButton>
          <Modal.Title>Refree Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" aria-required>
              {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control type="email" placeholder="FullName" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Email address"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Business Name</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Business Name"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Refer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReferalForm;
