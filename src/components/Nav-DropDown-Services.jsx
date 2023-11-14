import Link from "next/link";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import styles from "../styles/Services.module.css";
import { useState } from "react";
// import { services } from "@/mock/mock-data";
import { ourServices } from "@/data/services-data/our-services";

const NavDropDownServices = ({ activeLink, onUpdateActiveLink }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => setShowDropdown(!showDropdown);

  return (
    <NavDropdown
      title="Services"
      id="basic-nav-dropdown"
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      onClick={() => setShowDropdown(!showDropdown)}
      className={`${
        showDropdown ? styles.dropdownOpen : styles.dropdownClosed
      } ${styles.dropdown_services}`}
      style={{ fontSize: "18px" }}
    >
      <div className={styles.dropdownMenu}>
        {" "}
        {/* Use the CSS module class */}
        {ourServices.map((service, index) => (
          <Link
            key={index}
            href={`/services#${service.slug}`}
            className={`d-block ${styles.nav_link} ${
              activeLink === service.title
                ? " active navbar-link"
                : " navbar-link"
            }`}
            onClick={() => onUpdateActiveLink(service)}
          >
            {service.title}
          </Link>
        ))}
        <div className="refer_button_wrapper">
          <Link href="/#refer" className={"refer_button"}>
            Refer to get more shares
          </Link>
        </div>
      </div>
    </NavDropdown>
  );
};

export default NavDropDownServices;
