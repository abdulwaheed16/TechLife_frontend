import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Link from "next/link";
// import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt="Logo"
              // className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
            {/* <Image src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-auto">
              <Link
                href="/"
                className={`nav-link ${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`nav-link ${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Services
              </Link>  <Link
                href="/blog"
                className={`nav-link ${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Blog
              </Link>
             
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <Link href="#"><Image src={navIcon1} alt="" /></Link>
                <Link href="#"><Image src={navIcon2} alt="" /></Link>
                <Link href="#"><Image src={navIcon3} alt="" /></Link>
              </div> */}
              {/* <HashLink to='#connect'> */}
              <button className="rounded-pill overflow-hidden">
                <span>Let’s Connect</span>
              </button>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
