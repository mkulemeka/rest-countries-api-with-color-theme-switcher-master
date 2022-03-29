import React from "react";
import { Nav, Container } from "react-bootstrap";
import { BsSun, BsMoonFill } from "react-icons/bs";
import "../Navbar/Navbar.scss";

const Navbar = ({ setDarkMode, darkMode }) => {
  const themeToggle = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <Nav className="app__nav">
      <Container className="d-flex aling-items-center justify-content-between pt-4 pb-4">
        <div className="logo">
          <span>Where in the world?</span>
        </div>
        <div
          className="theme-switcher d-flex align-items-center"
          onClick={themeToggle}
        >
          {darkMode ? (
            <BsMoonFill className="mx-2 h-100" />
          ) : (
            <BsSun className="mx-2 h-100" />
          )}
          <span>{darkMode ? "Dark" : "Light"} Mode</span>
        </div>
      </Container>
    </Nav>
  );
};

export default Navbar;
