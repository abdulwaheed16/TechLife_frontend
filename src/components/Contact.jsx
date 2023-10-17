import { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
// import contactImage from "../assets/img/contact-img.svg";
import contactImage from "../../public/images/robo_image-preview.png";

import "animate.css";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import TrackVisibility from "react-on-screen";
import Image from "next/image";
import { loadOptions, colorStyles } from "./SelectServicesSettings";
import { servicesOptions } from "@/data/services-data/our-services";
import toast from "react-hot-toast";
import SendBtn from "./ui/Send-Btn";
import { ourServices } from "@/data/services-data/our-services";
import { updateServicesOptions } from "@/mock/mock-data";
import { useRouter } from "next/router";
import chalk from "chalk";
import useContact from "@/hooks/useContact";

export const Contact = () => {
  // Select input animations and useRef
  const animatedComponent = makeAnimated();
  const asyncSelectRef = useRef();

  const router = useRouter();
  const { service, plan, sub_plan } = router.query;
  const [selectedPackages, setSelectedPackages] = useState([]);

  // Form feilds

  const formInitialDetails = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
    referral_code: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  // --------------------------------------
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  // ------------------------------------
  // if ((service && plan) || sub_plan) {
  //   const isPackageExists = selectedPackages?.find(
  //     (pkg) => pkg?.service === service
  //   );

  //   if (!isPackageExists) {
  //     selectedPackages?.push({
  //       service: service,
  //       package: plan,
  //       sub_package: sub_plan,
  //     });
  //   }
  // }

  // -------------------------------------
  const handleSelectChange = (selectedOptions) => {
    const selected_options = selectedOptions.map((option) => {
      const group = servicesOptions.find((category) =>
        category.options.some((opt) => opt.value === option.value)
      );
      const package_name = option.value.split("-").slice(0, 1).join().trim();
      const sub_package = option.value.split("-").slice(1).join().trim();
      // console.log("PACKAGE: ", package_name);
      // console.log("SUB-PACKAGE: ", sub_package);

      return {
        service: group?.label,
        package: package_name ? package_name : option?.value,
        sub_package: sub_package ? sub_package : "",
      };
    });

    console.log("Selected Options:", selected_options);
    setSelectedPackages(selected_options);
  };

  // Handle Submit----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact_details = {
      ...formDetails,
      packages: selectedPackages,
    };

    // const { isLoading, isError, error, success } = useContact({
    //   data: contact_details,
    // });

    // isLoading && toast.loading("sending...");
    // success && toast.success("Thanks for contacting us");
    const data = contact_details;
    try {
      toast.loading("sending...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const res = await response.json();
      console.log("Response data: ", res);
      toast.dismiss();
      res && toast.success("Thanks for contacting us");
    } catch (error) {
      console.log("Error:", error);
    }

    console.log("Contact Info", contact_details);
    setFormDetails(formInitialDetails);
    setSelectedPackages();
    asyncSelectRef.current.clearValue();
  };
  // ---------------------------------------

  let defaultOptionValue = {
    value: service,
    label: sub_plan ? `${plan} - ${sub_plan}` : plan,
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };

  // ===========================================================
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
                    width={450}
                    height={450}
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
                          name="fullname"
                          value={formDetails.fullname}
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
                            className="select-packs"
                            style={{ color: "white" }}
                          />
                        </Col>
                      )}
                      {!service && (
                        <Col size={12} xs={12} className="px-1 py-3">
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
                            className="form-check-input"
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
