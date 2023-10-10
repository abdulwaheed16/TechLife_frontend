import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import contactImage from "../../public/images/down_image.jpg";
import "animate.css";
// import Select from "react-select";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import TrackVisibility from "react-on-screen";
import Image from "next/image";
import { loadOptions, colorStyles } from "./SelectServicesSettings";
import { servicesOptions } from "@/data/services-data/our-services";
import toast from "react-hot-toast";
import SendBtn from "./ui/Send-Btn";
import { ourServices } from "@/data/services-data/our-services";

export const Contact = () => {
  const animatedComponent = makeAnimated();
  const asyncSelectRef = useRef();

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
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

    const selected_options = selectedOptions.map((option) => option.label);
    const contact_details = { ...formDetails, selected_options };
    console.log("Contact Info", contact_details);
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    asyncSelectRef.current.clearValue();
  };

  const handleSelectChange = (selectedOption) => {
    console.log("Selected Option: ", selectedOption);
    setSelectedOptions(selectedOption);
  };

  //
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} lg={6} className="img-section">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="img_wrapper">
                  {" "}
                  <Image
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImage}
                    alt="Contact Us"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} lg={6} className="order-lg-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>
                    Book A <span style={{ color: "yellow" }}>Free</span>{" "}
                    Consultancy
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} xs={12} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lasttName}
                          placeholder="Full Name"
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} xs={12} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} xs={12} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} xs={12} className="px-1 py-4">
                        <AsyncSelect
                          loadOptions={loadOptions}
                          defaultOptions={servicesOptions}
                          styles={colorStyles}
                          onChange={handleSelectChange}
                          isMulti
                          // closeMenuOnSelect={true}
                          components={animatedComponent}
                          ref={asyncSelectRef}
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
                        <SendBtn />
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
