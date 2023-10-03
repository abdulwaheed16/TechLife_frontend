import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { siteConfig } from "@/config/siteConfig";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Image from "next/image";
import Link from "next/link";
import { contactInfo, quickLinks } from "@/mock/mock-data";
import MdOutlinePhoneIphone from "react-icons/md";

export const Footer = () => {
  const { address, phone, email } = contactInfo;
  const [activeLink, setActiveLink] = useState("home");
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
              {siteConfig.headerLinks?.map((link, index) => (
                <Link
                  href={link.path}
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
                <Link href="#">
                  <Image src={navIcon1} alt="Icon" />
                </Link>
                <Link href="#">
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
            <p className="copy-right">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
          </Col>
          <Col size={12} sm={4} className="">
            <div className="quick-links">
              <Link href={"/privacy-policy"} className="quick-link">
                Privacy Policy
              </Link>
              <Link href={"/terms-and-conditions"} className="quick-link">
                Terms and Conditions
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
{
}
