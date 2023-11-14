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
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
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
    setIsGeneratingCode(true);

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
        setIsGeneratingCode(false)
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
         <div className={refer_styles.inputs_wrapper}>
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
         </div>
            <div className={refer_styles.generate_button_wrapper}>
            <button
              type="submit"
              className={`${refer_styles.generate_button} ${refer_styles.copy_button} `}
            >
           <div className={isGeneratingCode && refer_styles.sparkle}>
           <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              <span>Generate</span>
           </div>
            </button>
            </div>
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
