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
import { v4 as userID } from "uuid";

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

    // selectedPackages.push({
    //   service: service,
    //   package: plan,
    //   sub_package: sub_plan,
    // });

    const newPackage = {
      service: service,
      package: plan,
      sub_package: sub_plan,
    };

    selectedPackages.push(newPackage);

    const selected_packages = selectedPackages?.filter((pkg) => {
      if (pkg?.service !== undefined) {
        return pkg;
      }
    });
    const contact_details = {
      ...formDetails,
      packages: selected_packages,
    };

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

      // add data to the spreadsheet as well
      const userId = userID();
      // --------------------------------------------------
      fetch("https://sheetdb.io/api/v1/fp30ohtre51sf", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              UserID: "",
              Name: data?.fullname,
              Email: data?.email,
              Phone: data?.phone,
              Packages: data?.packages
                ?.map(
                  (pkg) =>
                    `*${pkg?.service}\n-${pkg?.package}\n${pkg?.sub_package}\n`
                )
                .join(),
              ReferralCode: data?.referral_code,
              Message: data?.message,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

      // --------------------------------------------------
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      const res = await response.json();
      console.log("Response data: ", res);
      toast.dismiss();
      res && toast.success("Thanks for contacting us");

      console.log("Contact Info", contact_details);
      setFormDetails(formInitialDetails);
      setSelectedPackages();
      asyncSelectRef.current.clearValue();

      router.push("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // --------------------------------------

  // ---------------------------------------

  let defaultOptionValue = {
    value: service,
    label: sub_plan ? `${plan} - ${sub_plan}` : plan,
    isFixed: true,
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
                          required
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
                          required
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
                          required
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
                            isFixed={true}
                            isClearable={false}
                            isSearchable={servicesOptions}
                            // closeMenuOnSelect={true}
                            components={{
                              DropdownIndicator: null, // Remove the dropdown indicator
                              ...animatedComponent,
                            }}
                            ref={asyncSelectRef}
                            placeholder="Select Your Desired Package  ( see the service page for more details)"
                            className="select-packs"
                            style={{ color: "white" }}
                            required
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
                            isFixed={true}
                            isClearable={false}
                            // closeMenuOnSelect={true}
                            components={{
                              DropdownIndicator: null, // Remove the dropdown indicator
                              ...animatedComponent,
                            }}
                            ref={asyncSelectRef}
                            placeholder="Select Your Desired Package  ( see the service page for more details)"
                            required
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
