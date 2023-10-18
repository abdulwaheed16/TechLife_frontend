import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/ui/connect-btn-banner.module.css";
import refer_styles from "../styles/Refer.module.css";
import ReferalCode from "./Referal-Code";
import { useForm } from "react-hook-form";

function ReferalForm() {
  const [show, setShow] = useState(false);
  const [isReferalCode, setIsReferalCode] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [referralCode, setrReferralCode] = useState("231-234");

  const siteLink = "https://thetechlife.co";

  const shareInformation = {
    referalCode: referralCode,
    siteLink: siteLink,
  };

  const handleReferalCode = () => {
    handleClose();
    setIsReferalCode(true);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Collect all data with error handling and log data.
    console.log("Referral Form Data: ", data);

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      const { referralCode } = await res.json();
      // alert(userStatus);

      if (referralCode) {
        setrReferralCode(referralCode);
        handleClose();
        setIsReferalCode(true);
      }
    } catch (error) {
      console.log("Failed to generate referral Code");
    }
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
        <Modal.Body className={refer_styles.form_body}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Form.Label>Full Name</Form.Label> */}
            <input
              type="text"
              {...register("fullname", { required: true })}
              placeholder="Your FullName"
              autoFocus
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}

            {/* <Form.Label>Full Name</Form.Label> */}
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email address"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            {/* <Form.Label>Business Name</Form.Label> */}
            <input
              type="text"
              {...register("businessName")}
              placeholder="Business Name ( optional )"
            />
            <button
              type="submit"
              className={`${refer_styles.generate_button} ${refer_styles.copy_button} `}
            >
              Generate
            </button>
          </form>
        </Modal.Body>
      </Modal>
      {isReferalCode && (
        <ReferalCode
          key={isReferalCode}
          isReferalCode={isReferalCode}
          setIsReferalCode={setIsReferalCode}
          referralCode={referralCode}
          onHide={handleClose}
        />
      )}
    </div>
  );
}

export default ReferalForm;
