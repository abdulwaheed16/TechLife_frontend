import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/Refer.module.css";
import { useCopyToClipboard } from "usehooks-ts";

const ReferalCode = ({ isReferalCode, setIsReferalCode, shareInformation }) => {
  const [show, setShow] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsReferalCode(false);
  };
  const handleShow = () => setShow(true);
  const [value, copy] = useCopyToClipboard();

  return (
    <div>
      {" "}
      <Modal
        // {...props}
        size="md"
        show={isReferalCode}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.model}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Referral Code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Image src={}/> */}
          <p>{shareInformation?.siteLink}</p>
          <p>code: {shareInformation?.referalCode}</p>
          <Button
            variant="primary"
            onClick={() => {
              copy(shareInformation.siteLink);
              //   navigator.clipboard.writeText(shareInformation.siteLink);
              setIsCopied(true);
            }}
            className={styles.copy_button}
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReferalCode;
