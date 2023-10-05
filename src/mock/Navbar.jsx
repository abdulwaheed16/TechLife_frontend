import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function BasicExample() {
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
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Link href="/" style={{ padding: "10px" }}>
          <Image src={logo} alt="Logo" width={100} height={24} priority />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              href={"/"}
              className={`nav-link navbar-link`}
              onClick={() => onUpdateActiveLink(link)}
            >
              Home
            </Link>
            <Link
              href={"//#about"}
              className={`nav-link navbar-link`}
              onClick={() => onUpdateActiveLink(link)}
            >
              About
            </Link>
            <Link
              href={"/blog"}
              className={`nav-link navbar-link`}
              onClick={() => onUpdateActiveLink(link)}
            >
              Blog
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
