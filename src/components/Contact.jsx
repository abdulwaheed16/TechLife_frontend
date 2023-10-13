import { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
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
import { useRouter } from "next/router";
import chalk from "chalk";

export const Contact = () => {
  const router = useRouter();
  const { service, plan, sub_plan } = router.query;

  console.log(
    "Selected Package",
    chalk.green(`${service}/${plan}/${sub_plan}`)
  );

  // for scrolling to spacific id

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      if (router.pathname === "/services") {
        window.scrollTo({
          top: document.querySelector(`#${"connect"}`).offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  }, [router]);
  // dropdown animations
  const animatedComponent = makeAnimated();
  const asyncSelectRef = useRef();

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const isErrors = {
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [isError, setIsError] = useState(isErrors);

  const [selectedOptions, setSelectedOptions] = useState([]);
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

  const handleSelectChange = (selectedOptions) => {
    const selectedLabels = selectedOptions.map((option) => {
      const group = servicesOptions.find((category) =>
        category.options.some((opt) => opt.value === option.value)
      );

      return `${group?.label}: ${option?.label}`;
    });

    console.log("Selected Options:", selectedLabels);
    setSelectedOptions(selectedLabels);
  };
  let defaultOptionValue;
  if (sub_plan) {
    defaultOptionValue = {
      value: service,
      label: `${plan} - ${sub_plan}`,
    };
  } else {
    defaultOptionValue = {
      value: service,
      label: `${plan}`,
    };
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
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
                    Consultation
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} xs={12} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lasttName}
                          className="input"
                          placeholder="Full Name"
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} xs={12} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          className="input"
                          placeholder="Email Address"
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      <Col size={12} xs={12} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          className="input"
                          placeholder="Phone No."
                          onChange={(e) => handleInput(e)}
                        />
                      </Col>
                      {service && (
                        <Col size={12} xs={12} className="px-1 py-4">
                          <AsyncSelect
                            loadOptions={loadOptions}
                            defaultOptions={servicesOptions}
                            defaultValue={defaultOptionValue}
                            styles={colorStyles}
                            onChange={handleSelectChange}
                            isMulti
                            // closeMenuOnSelect={true}
                            components={animatedComponent}
                            ref={asyncSelectRef}
                            placeholder="Select Your Desired Package  ( see the service page for more details)"
                          />
                        </Col>
                      )}
                      {!service && (
                        <Col size={12} xs={12} className="px-1 py-4">
                          <AsyncSelect
                            loadOptions={loadOptions}
                            defaultOptions={servicesOptions}
                            // defaultValue={defaultOptionValue}
                            styles={colorStyles}
                            onChange={handleSelectChange}
                            isMulti
                            // closeMenuOnSelect={true}
                            components={animatedComponent}
                            ref={asyncSelectRef}
                            placeholder="Select Your Desired Package  ( see the service page for more details)"
                          />
                        </Col>
                      )}
                      <Col size={12} xs={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => handleInput(e)}
                        ></textarea>
                      </Col>
                      <Col xs={12}>
                        <div class="form-check mt-3 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            I have referral code
                          </label>
                        </div>
                      </Col>
                      {isChecked && (
                        <Col size={12} xs={6} className="px-1">
                          <input
                            type="text"
                            name="referral_code"
                            value={formDetails.referral_code}
                            className="input"
                            placeholder="Referral Code"
                            onChange={(e) => handleInput(e)}
                          />
                        </Col>
                      )}
                      <Col xs={12}>
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
