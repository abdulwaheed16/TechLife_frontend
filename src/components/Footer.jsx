import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/mock/mock-data";
import { TermsAndConditions } from "./Terms-And-Conditions";
import { PrivacyPolicy } from "./Privacy-Policy";

export const Footer = () => {
  const { address, phone, email } = contactInfo;
  const [activeLink, setActiveLink] = useState("home");

  const [termsConditionsShow, setTermsConditionsShow] = useState(false);

  const [privacyPolicyShow, setPrivacyPolicyShow] = useState(false);

  return (
    <footer className="footer">
      <Container>
        <Row xs={1} md={2} lg={3} className="align-items-start">
          {/* <MailchimpForm /> */}
          <Col className="">
            <div className="contact-footer">
              <h2>Contact</h2>
              <div className="color-line"></div>
              <ul className="contact-info">
                <li className="phone">
                  {/* <MdOutlinePhoneIphone /> */}
                  {phone}
                </li>
                <li className="address">{address}</li>
                <li className="email">{email}</li>
              </ul>
            </div>
          </Col>
          <Col className="">
            <div className="sitemap">
              <h2>SiteMap</h2>
              <div className="color-line"></div>
              {siteConfig.footerLinks?.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`nav-link ${
                    activeLink === link.label
                      ? "active navbar-link"
                      : "navbar-link"
                  }`}
                  onClick={() => onUpdateActiveLink(link.label)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Col>
          <Col className="">
            <div className="follow-us">
              <h2 className="">Follow Us</h2>
              <div className="color-line"></div>
              <div className="social-icon">
                <Link href="https://www.linkedin.com/">
                  <Image src={navIcon1} alt="Icon" />
                </Link>
                <Link href="">
                  <Image src={navIcon2} alt="Icon" />
                </Link>
                <Link href="#">
                  <Image src={navIcon3} alt="Icon" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer-end">
          <Col size={12} sm={4} className="">
            <div className="quick-links">
              <button
                className="quick-link"
                onClick={() => setPrivacyPolicyShow(true)}
              >
                Privacy Policy
              </button>
              <button
                className="quick-link"
                onClick={() => setTermsConditionsShow(true)}
              >
                Terms and Conditions
              </button>
            </div>
          </Col>
          <Col
            size={12}
            sm={4}
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="copy-right">
              <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
      <TermsAndConditions
        show={termsConditionsShow}
        onHide={() => setTermsConditionsShow(false)}
      />
      <PrivacyPolicy
        show={privacyPolicyShow}
        onHide={() => setPrivacyPolicyShow(false)}
      />
    </footer>
  );
};
{
}
