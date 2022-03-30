import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/FinalLogo.png";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const StudentNav = () => {
  const [navdropdownSelection, setNavDropDownSelection] =
    useState("Class Performance");

  const dropDownOptions = {
    1: "Performance Overview",
    2: "Class-wise Overview",
    3: "Class-wise Analysis",
  };

  const isLoggedIn = true; //for logged in

  const handleDropdownSelection1 = () => {
    setNavDropDownSelection(dropDownOptions[1]);
  };
  const handleDropdownSelection2 = () => {
    setNavDropDownSelection(dropDownOptions[2]);
  };
  const handleDropdownSelection3 = () => {
    setNavDropDownSelection(dropDownOptions[3]);
  };

  return (
    <Styles>
      <Navbar expand="lg" fixed="top" className="nav-bar">
        <div className="logoContainer">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="materate">MateRate</div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center">
            <NavDropdown
              title={
                <span className="dropdownTitle">{navdropdownSelection}</span>
              }
              id="basic-nav-dropdown"
              className="dropdownMenu"
            >
              <NavDropdown.Item>
                <NavLink
                  to="/performanceOverview"
                  className="dorpdownNavlink"
                  onClick={handleDropdownSelection1}
                >
                  {dropDownOptions[1]}
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/classwiseOverview"
                  className="dorpdownNavlink"
                  onClick={handleDropdownSelection2}
                >
                  {dropDownOptions[2]}
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/classwiseAnalysis"
                  className="dorpdownNavlink"
                  onClick={handleDropdownSelection3}
                >
                  {dropDownOptions[3]}
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/performanceOverview" className="navlink showOnMobile">
              Performance Overview
            </NavLink>
            <NavLink to="/classwiseOverview" className="navlink showOnMobile">
              Class-wise Overview
            </NavLink>
            <NavLink to="/classwiseAnalysis" className="navlink showOnMobile">
              Class-wise Analysis
            </NavLink>
            <NavLink to="/resultanalysis" className="navlink">
              Result Analysis
            </NavLink>
            <NavLink to="/responses" className="navlink">
              Student Responses
            </NavLink>
            <NavLink to="/" className="navlink logout">
              {isLoggedIn ? "Logout" : "Login"}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
const Styles = styled.div`
  color: white;

  .navlink {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 0.6vw;
    font-size: 20px;
    border-radius: 0.3vw;
    font-weight: 700;
    margin: 0.5em 0.6em;
    @media (max-width: 1000px) {
      margin: 0.5vw 2vw;
      text-align: center;
      border: none;
      font-weight: 500;
      width: 300px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      font-weight: 300;
      width: 200px;
    }
  }
  .navlink:hover {
    transition: all 0.2s ease-out;
    color: #0032ad;
    border: 1px solid white;
    background-color: white;
    @media (max-width: 900px) {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.3);
      border: 1px solid white;
      border-width: 0 0 2px 0;
    }
  }
  .logout {
    @media (max-width: 900px) {
      margin-bottom: 3vw;
    }
  }
  .dropdownMenu {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 0.09vw 0.4vw;
    font-size: 20px;
    border-radius: 0.3vw;
    font-weight: 700;
    margin: 0 0.6em;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .dropdownMenu:hover {
    transition: all 0.2s ease-out;
    color: #0032ad;
    border: 1px solid white;
    background-color: white;
    .dropdownTitle {
      color: #0032ad;
    }
  }

  .dropdownTitle {
    color: #fff;
  }

  .dorpdownNavlink {
    text-decoration: none;
  }
  .materate {
    font-size: 2.5rem;
    font-weight: 700;
    margin-left: 0.5em;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .logo {
    height: 45px;
    margin-left: 0.5em;
    @media (max-width: 900px) {
      margin-left: 0;
    }
  }

  .nav-bar {
    padding: 0px 20px;
    background: transparent linear-gradient(273deg, #0032ad 0%, #0080fe 100%) 0%
      0% no-repeat padding-box;
    width: 100%;
  }

  .navbar-nav {
    margin-left: auto;
  }

  .spacer {
    width: 32vw;
  }
  .logoContainer {
    @media (max-width: 480px) {
      padding: 4.5px;
    }
  }
  .dropdown-menu {
    width: 100%;
    text-align: center;
  }
  .dropdown-item {
    padding: 0.2em 0;
  }

  .dropdown-toggle::after {
    //for changing dropdown toggle color
    color: white;
  }
  .dropdown-toggle:hover::after {
    //for changing dropdown toggle color on hover
    color: #0032ad;
  }

  .showOnMobile {
    @media (min-width: 900px) {
      display: none;
    }
  }
  .hideOnMobile {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default StudentNav;
