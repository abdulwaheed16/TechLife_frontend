import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const PrivacyPolicy = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
      style={{
        color: "#292929",
        paddingTop: "80px",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Privacy Policy{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          TechLife operates the website [YourWebsite.com] (the "Site"). This
          Privacy Policy informs you of our policies regarding the collection,
          use, and disclosure of Personal Information we receive from users of
          the Site.
        </p>
        <h5>1. Information Collection and Use</h5>
        <p>1.1 Information You Provide to Us</p>
        <p>
          We collect personally identifiable information ("Personal
          Information") that you voluntarily provide to us, including but not
          limited to your name, email address, and any other information
          provided when you:
        </p>
        <ul>
          <li>Sign up for our newsletter</li>
          <li>Fill out a contact form</li>
          <li>Make a purchase</li>
          <li>Participate in surveys or promotions</li>
        </ul>
        <p>1.2 Automatically Collected Information</p>
        <p>
          We automatically collect certain information when you visit, use, or
          navigate the Site. This information may include your IP address,
          browser type, referral URLs, and other diagnostic data.
        </p>
        {/* 2------------------------- */}
        <h5>2. Use of Information</h5>
        <p>We use the collected information for various purposes, including:</p>
        <ul>
          <li>To personalize your experience on our Site</li>
          <li>To process transactions</li>
          <li>
            To send periodic emails regarding your order or other products and
            services
          </li>
          <li>To improve our Site and customer service</li>
        </ul>
        {/* 3.---------------- */}
        <h5>3. Disclosure of Information</h5>
        <p>
          We do not sell, trade, or rent your Personal Information to third
          parties. We may share generic aggregated demographic information not
          linked to any Personal Information regarding visitors and users with
          our business partners and trusted affiliates for the purposes outlined
          above
        </p>
        {/* 4.--------------------- */}
        <h5>4. Cookies and Tracking Technologies</h5>
        <p>
          Our Site may use "cookies" to enhance your experience. You can
          instruct your browser to refuse all cookies or to indicate when a
          cookie is being sent.
        </p>
        {/* 5.----------------------- */}
        <h5>5. Security</h5>
        <p>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet or method of
          electronic storage is 100% secure.
        </p>
        {/* 6. ------------------------ */}
        <h5>6. Links to Other Websites</h5>
        <p>
          Our Site may contain links to other websites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us, and we have no control over
          their content and practices.
        </p>
        {/* 7. ----------------------- */}
        <h5>7. Changes to This Privacy Policy</h5>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>
        {/* 8. ----------------------- */}
        <h5>8. Contact Us</h5>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at Support@thetechlife.co .
        </p>
      </Modal.Body>
    </Modal>
  );
};
