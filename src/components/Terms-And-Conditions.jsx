import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const TermsAndConditions = (props) => {
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
          Terms and Conditions
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ height: "90vh", overflow: "scroll" }}>
        <h4> Welcome to the TechLife!</h4>

        <p>
          {" "}
          These terms and conditions outline the rules and regulations for the
          use of TechLife's Website, located at [YourWebsite.com].
        </p>
        <p>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use TechLife’s website if you do not
          agree to take all of the terms and conditions stated on this page.
        </p>
        {/* -------------1. License to use---------- */}
        <h5>1. License to use</h5>
        <p>
          1.1 You may view and download the materials from this website for
          personal use, subject to the restrictions set out in these terms and
          conditions.
        </p>
        <h5>1.2 You must not</h5>
        <ul>
          <li>
            Republish material from this website without prior written consent.
          </li>
          <li>Sell, rent, or sub-license material from the website.</li>
          <li>Reproduce, duplicate, or copy material from the website.</li>
        </ul>
        {/* 2---------------2. User Comments------------ */}
        <h5>2. User Comments</h5>
        <p>
          2.1 Certain parts of this website allow users to post comments.
          TechLife reserves the right to monitor all comments and to remove any
          content that can be considered inappropriate, offensive, or causes
          breach of these terms and conditions.
        </p>
        <p>
          2.2 You warrant and represent that your comments do not invade any
          intellectual property rights, including copyright, trademark, patent,
          or any other proprietary rights. You further warrant that your
          comments will not contain libelous or otherwise unlawful, abusive,
          orobscene material, or contain any computer virus or other malware
          that could in any way affect the operation of the website or any
          related website.
        </p>
        {/* --------------3. Disclaimer----------- */}
        <h5>3. Disclaimer</h5>
        <p>
          3.1 The materials on TechLife's website are provided on an 'as is'
          basis. TechLife makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
        {/* -----------4. Limitations--------------- */}
        <h5>4. Limitations</h5>
        <p>
          4.1 In no event shall TecLife or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on TechLife's website.
        </p>
        {/* ----------5. Revisions-------------- */}
        <h5>Revisions</h5>
        <p>
          {" "}
          5.1 TechLife may revise these terms and conditions at any time without
          notice. By using this website, you are agreeing to be bound by the
          then-current version of these terms and conditions.
        </p>
        {/* ------------6. Governing Law----------- */}
        <h5>Governing Law</h5>
        <p>
          6.1 These terms and conditions are governed by and construed in
          accordance with the laws of TechLife, and you irrevocably submit to
          the exclusive jurisdiction of the courts in that State or location.
        </p>
        <p>
          If you have any queries regarding our terms and conditions, please
          contact us at Support@thetechlife.co.
        </p>
      </Modal.Body>
    </Modal>
  );
};
