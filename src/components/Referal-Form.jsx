import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/ui/connect-btn-banner.module.css";
import refer_styles from "../styles/Refer.module.css";
import ReferalCode from "./Referal-Code";

function ReferalForm() {
  const [show, setShow] = useState(false);
  const [isReferalCode, setIsReferalCode] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const referalCode = "123-345";
  const siteLink = "https://tech-life-frontend.vercel.app/";
  const shareInformation = {
    referalCode: referalCode,
    siteLink: siteLink,
  };

  const handleReferalCode = () => {
    handleClose();
    setIsReferalCode(true);
  };

  return (
    <div>
      <Button onClick={handleShow} className={styles.button}>
        Get Now
      </Button>

      <Modal show={show} onHide={handleClose} className={refer_styles.model}>
        <Modal.Header closeButton>
          <Modal.Title>Generate Your Referral Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" aria-required>
              {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control type="text" placeholder="Your FullName" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" aria-required>
              {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control type="email" placeholder="Your Email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Business Name</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Business Name ( optional )"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleReferalCode}
            className={refer_styles.copy_button}
          >
            Generate
          </Button>
        </Modal.Footer>
      </Modal>
      {isReferalCode && (
        <ReferalCode
          key={isReferalCode}
          isReferalCode={isReferalCode}
          setIsReferalCode={setIsReferalCode}
          shareInformation={shareInformation}
          onHide={handleClose}
        />
      )}
    </div>
  );
}

export default ReferalForm;
