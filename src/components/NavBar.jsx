import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import logo from "../assets/img/logo.svg";
import { siteConfig } from "@/config/siteConfig";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import ServicesMenu from "./Services-Menu";
import ConnectBtnNavbar from "./ui/Connect-Btn-Navbar";

// import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link.label);
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/contact-us");
  };

  return (
    <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="navbar-container">
          <Link href="/" style={{ padding: "10px" }}>
            <Image src={logo} alt="Logo" width={100} height={24} priority />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-auto">
              {siteConfig.headerLinks?.map((link, index) => {
                if (link.label === "Services") {
                  return (
                    <ServicesMenu
                      activeLink={activeLink}
                      onUpdateActiveLink={onUpdateActiveLink}
                    />
                  );
                } else {
                  return (
                    <Nav.Item key={index}>
                      <Link
                        href={link.path}
                        className={`nav-link ${
                          activeLink === link.label
                            ? "active navbar-link"
                            : "navbar-link"
                        }`}
                        onClick={() => onUpdateActiveLink(link)}
                      >
                        {link.label}
                      </Link>
                    </Nav.Item>
                  );
                }
              })}
            </Nav>
            <span className="navbar-text">
              {/* <HashLink to='#connect'> */}
              <ConnectBtnNavbar />

              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
