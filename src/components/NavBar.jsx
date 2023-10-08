import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { siteConfig } from "@/config/siteConfig";
import { useRouter } from "next/router";
import Link from "next/link";
import ConnectBtnNavbar from "./ui/Connect-Btn-Navbar";
import { useMediaQuery } from "@react-hook/media-query";
import NavDropDownServices from "./Nav-DropDown-Services";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)"); // Define a media query for mobile screens

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

  // Responsive Styling

  const navbarClass = isMobile ? "navbar-mobile-bg" : "";

  return (
    <div>
      <Navbar
        expand="md"
        className={`${scrolled ? "scrolled" : ""} ${navbarClass}`}
      >
        <Container className="navbar-container">
          <Link href="/" style={{ padding: "10px" }} className="logo">
            {/* <Image src={logo} alt="Logo" width={100} height=
            {24} priority /> */}
            <h2>TechLife</h2>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-auto">
              {siteConfig.headerLinks?.map((link, index) => {
                if (link.label === "Services") {
                  return (
                    <NavDropDownServices
                      key={link.label}
                      activeLink={activeLink}
                      onUpdateActiveLink={onUpdateActiveLink}
                    />
                  );
                } else {
                  return (
                    <Nav.Item key={index}>
                      <Link
                        key={link.label}
                        href={link.path}
                        className={`nav-link ${
                          activeLink === link.label
                            ? "active navbar-link"
                            : "navbar-link"
                        } ${isMobile ? "mobile-link" : ""}`} // Add a class based on the media query
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
              {/* <span>737 313 1967</span> */}
              <ConnectBtnNavbar />
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
