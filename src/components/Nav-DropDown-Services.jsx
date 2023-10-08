import Link from "next/link";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import styles from "../styles/Services.module.css";
import { useState } from "react";
import { services } from "@/mock/mock-data";

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
      }`}
    >
      <div className={styles.dropdownMenu}>
        {" "}
        {/* Use the CSS module class */}
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/#${service.id}`}
            className={`d-block ${styles.nav_link} ${
              activeLink === service.title
                ? " active navbar-link"
                : " navbar-link"
            }`}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </NavDropdown>
  );
};

export default NavDropDownServices;
