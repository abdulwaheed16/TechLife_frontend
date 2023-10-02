import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TrackVisibility from "react-on-screen";
import Image from "next/image";

export const Contact = () => {
  const options = [
    { value: "web development", label: "Web Development" },
    {
      value: "mobile development",
      label: "Mobile Development",
    },
    {
      value: "graphic design",
      label: "Graphic Design",
    },
    {
      value: "seo",
      label: "SEO",
    },
    {
      value: "digital marketing",
      label: "Digital Marketing",
    },
  ];

  const animatedComponent = makeAnimated();

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    console.log("Contact Info", formDetails);
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({
    //     succes: false,
    //     message: "Something went wrong, please try again later.",
    //   });
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} lg={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <Image
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} lg={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            // onFormUpdate("firstName", e.target.value)
                            handleInput(e)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1 py-4">
                        <Select
                          options={options}
                          isMulti
                          closeMenuOnSelect={true}
                          components={animatedComponent}
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => handleInput(e)}
                        ></textarea>
                        <button type="submit" className="sendBtn">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
