import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { BsBoxArrowLeft } from "react-icons/bs";
import logo from "../assets/Logo-sm.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./ResultPortalBurgerMenu";
import { Navbar, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { FaUser } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import { axiosInstance } from "../lib/axiosAPI";

import { Modal } from "react-bootstrap";

const Styles = styled.div`
  .react-icons {
    color: white;
  }
  .fauser {
    height: 90%;
    width: 100%;
    color: white;
    font-size: 1.6rem;
    border: 2px solid white;
    border-radius: 10px;
    padding: 9px 10px;
    cursor: pointer;
    margin-right: 3%;
    /* align-items:right ; */
    @media (max-width: 927px) {
      height: 80%;
      width: 90%;
    }
    /* @media (max-width:700px){
  height:80%;
  width:85%;
} */
  }
  .fauser:hover {
    transition {
      color: #0032ad;
      border: 2px solid white;
      background-color: white;
    }
  }
  .fauser1 {
    /* height:90%; */
    /* width:100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: white;
    font-size: 1.6rem;
    border: 2px solid white;
    border-radius: 10px;
    /* padding:9px 10px; */
    cursor: pointer;
    /* margin-right:3%; */
    /* align-items:right ; */
    /* @media (max-width:927px){
  height:80%;
  width:90%;
} */
    /* @media (max-width:700px){
  height:80%;
  width:85%;
} */
  }
  .fauser1:hover {
    color: #0032ad;
    border: 2px solid white;
    background-color: white;
  }
  .user .dropdown-toggle::after {
    display: none !important;
  }
  /* .user .dropdown-menu {
  margin-right:20%;
} */

  body {
    overflow-x: hidden;
  }

  .clicked {
    background: transparent;
    box-shadow: -5px -5px 10px #0366cf inset, 5px 5px 10px #102650e0 inset;
    border-radius: 16px;
    border: 0px solid transparent;
    padding: 0.9rem 2rem;
    font-weight: 700;
  }
  .unclicked {
    background: #004abfe0 0% 0% no-repeat padding-box;
    box-shadow: -5px -5px 10px #0366cf, 5px 5px 10px #102650e0;
    border-radius: 16px;
    border: 0px solid transparent;
    padding: 0.9rem 2rem;
    font-weight: 700;
  }
  .logo-container img {
    max-height: 75px;
  }
  .logout {
    background: #004abfe0 0% 0% no-repeat padding-box;
    box-shadow: -5px -5px 10px #0366cf, 5px 5px 10px #102650e0;
    border-radius: 16px;
    border: 0px solid transparent;
    padding: 0.65rem 1.5rem;
    font-weight: 700;
    color: white;
  }

  .nav-bar {
    padding: 0px 20px;
    background: transparent linear-gradient(273deg, #0032ad 0%, #0080fe 100%) 0%
      0% no-repeat padding-box;
    height: 82px;
    margin-bottom: 150px;
  }
  .nav-bar img {
    max-height: 50px;
  }
  .burger-menu {
    width: 36px;
    margin: 10px;
  }
  .materate-text {
    color: #ffffff;
    font-weight: 700;
    margin: 0 3%;
  }
  .navbtn {
    margin: 5px 0;
  }

  .btnbox {
    margin-right: 20px;
  }
  .navbar-collapse,
  .navbar-nav {
    height: 82px;
  }
  .formModal div {
    border-radius: 30px;
  }
  .formContainer {
    border-radius: 30px;
  }

  @media screen and (max-width: 467px) {
    .nav-bar {
      height: 52px;
    }
    .nav-bar img {
      max-height: 30px;
    }
    .burger-menu {
      width: 24px;
      margin: 4px;
    }
  }

  @media (min-width: 992px) {
    .navbar-collapse,
    .navbar-nav {
      padding-bottom: 10px;
    }
    .navbar-nav a {
      padding: 10px 30px;
    }
    .materate-text {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 936px) {
    .navbtn {
      font-size: 15px;
    }
    .navbtn1 {
      font-size: 15px;
    }
  }
  @media (max-width: 850px) {
    .navbtn {
      font-size: 13px;
    }
    .navbtn1 {
      font-size: 13px;
    }
    .btnbox {
      margin-right: 8px;
    }
  }
  @media (max-width: 400px) {
    .materate-text {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 360px) {
    .materate-text {
      font-size: 1.4rem;
    }
    .navbtn {
      font-size: 10px;
    }
    .navbtn1 {
      font-size: 10px;
    }
    .btnbox {
      margin-right: 5px;
    }
  }
  @media (max-width: 320px) {
    .materate-text {
      font-size: 1.2rem;
    }
    .navbtn {
      font-size: 7px;
    }
    .navbtn1 {
      font-size: 7px;
    }
    .btnbox {
      margin-right: 4px;
    }
  }
  @media (max-width: 320px) {
    .navbtn1 {
      padding-top: 6%;
    }
  }

  /* ********************************************************************************************************************************* */

  .menu-container {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: end;
    margin-bottom: 5px;
  }

  .menu-trigger {
    background: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto; /* Strictly for positioning */
  }

  .menu-trigger:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }

  .menu-trigger span {
    font-weight: 700;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }

  .menu-trigger img {
    border-radius: 90px;
  }

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 150px;
    text-align: center;
    font-weight: 600;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    @media (max-width: 500px) {
      width: 120px;
    }
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .menu li:hover {
    color: #007dfb;
  }
  .menu li .liNavlink:hover {
    color: #007dfb;
  }

  .menu li {
    border-bottom: 1px solid #dddddd;
  }

  .menu li a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
    cursor: pointer;
  }
  .summarybtn {
    display: flex;
    justify-content: right;
    align-items: right;
    align-content: right;
    right: 0;
  }
  @media (max-width: 600px) {
    .right .btnbox {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
  }
`;

function ResultPortalNavbar(props) {
  const [data, setData] = useState("");
  const [showHide, setShowHide] = useState("");
  const dropdownRef = React.useRef(null);
  const dropdownRef1 = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isActive1, setIsActive1] = useDetectOutsideClick(dropdownRef1, false);
  const onClick = () => setIsActive(!isActive);
  const onClick1 = () => setIsActive1(!isActive1);

  const handleModalShowHide = () => {
    setShowHide(!showHide);
  };

  const handleLogout = () => {
    var data = {
      refresh_token: localStorage.getItem("refresh_token"),
    };
    console.log("refreshtokenlogout", data);
    axiosInstance
      .post("logout/", data)
      .then((res) => {
        console.log("response123: ", res.data);
      })
      .then(() => {
        // Local storage is cleared during logout inorder to remove the refresh tokens and access tokens from the local storage so there wont be a problem when the user login again

        console.log("token remove");
        localStorage.clear();
        window.location.href = "/login/";
      });
  };

  useEffect(() => {
    try {
      axiosInstance.get("/dashboard/").then((res) => {
        setData(res.data);
        console.log("response navbar: ", res.data);
      });
    } catch (error) {
      console.log("Error in getting data: ", error);
    }
  }, []);

  return (
    <div>
      <Styles>
        <Navbar fixed="top" className="nav-bar justify-content-between">
          <Navbar.Brand
            href=""
            className="d-flex justify-content-center align-items-center py-3"
          >
            {/* commented this line for now comment it out later */}

            <div className="burger-menu">
              <BurgerMenu />
            </div>
            <NavLink
              to="/"
              className="d-flex justify-content-center align-items-center"
              style={{ textDecoration: "none" }}
            >
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="materate-text">MateRate</div>
            </NavLink>
          </Navbar.Brand>

          {/* <div className="user mx-5">

<Dropdown  align={{ lg: 'end' }} variant="">
<Dropdown.Toggle variant="fauser1" as="div" >
<FaUser className="fauser"/>

</Dropdown.Toggle>

<Dropdown.Menu  title="Dropdown end">
<Dropdown.Item href={`/profile/`} >My Profile</Dropdown.Item>
<hr/>
<Dropdown.Item onClick={() => handleModalShowHide}>Logout</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div> */}

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* <div className="container"> */}
          {window.matchMedia("(min-width: 760px)").matches ? (
            <>
              <div className="summarybtn">
                <div className="btnbox">
                  <NavLink
                    to={`/results/${props.id}/answerkey`}
                    style={{ textDecoration: "none" }}
                  >
                    <button class="btn btn-outline-light btn-lg fw-bold navbtn">
                      Answer Key
                    </button>
                  </NavLink>
                </div>
                <div className="btnbox">
                  <NavLink
                    to={`/results/${props.id}/quizboard`}
                    style={{ textDecoration: "none" }}
                  >
                    <button class="btn btn-outline-light btn-lg fw-bold navbtn">
                      Summary
                    </button>
                  </NavLink>
                </div>
                <div className="btnbox">
                  <NavLink
                    to={`/results/${props.id}/analysis`}
                    style={{ textDecoration: "none" }}
                  >
                    <button class="btn btn-outline-light btn-lg fw-bold navbtn">
                      Result Analysis
                    </button>
                  </NavLink>
                </div>
                <div className="menu-container">
                  <div onClick={onClick} className="">
                    <FaUser className="fauser" />
                  </div>
                  <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                  >
                    <ul>
                      <li>
                        <NavLink className="liNavlink" to="/profile/">
                          My Profile
                        </NavLink>
                      </li>
                      {/* <hr/> */}
                      <li>
                        <a onClick={() => handleModalShowHide()}>Logout</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <Modal
                size="lg"
                show={showHide}
                centered
                onHide={handleModalShowHide}
                dialogClassName="formModal"
              >
                <Modal.Body className="formContainer">
                  <div className="p-5 text-center">
                    <h3 className="p-3">
                      {data.name && data.name.toUpperCase()}, Are you sure you
                      want to log out?
                    </h3>
                    <div className="d-flex justify-content-center">
                      <div
                        className="btn btn-outline-primary btn-lg px-5 m-3"
                        onClick={handleModalShowHide}
                      >
                        NO
                      </div>
                      <div
                        className="btn btn-primary btn-lg px-5 m-3"
                        onClick={handleLogout}
                      >
                        YES
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <>
              <div className="right" style={{ display: "flex" }}>
                {/* <div className="btnbox">

          <Dropdown>
  <Dropdown.Toggle variant="btn btn-outline-light btn-lg fw-bold navbtn " id="dropdown-basic">
      {props.selected}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href={`/results/${props.id}/quizboard`} >Summary</Dropdown.Item>
    <Dropdown.Item href={`/results/${props.id}/answerkey`}>Answer Key</Dropdown.Item>
    <Dropdown.Item href={`/results/${props.id}/analysis`}>Result Analysis</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div> */}

                <div className="menu-container">
                  <div
                    onClick={onClick1}
                    className="btn  fauser1 navbtn1  mr-2"
                  >
                    {props.selected}&nbsp;
                    <AiFillCaretDown />
                  </div>
                  <nav
                    ref={dropdownRef1}
                    className={`menu ${isActive1 ? "active" : "inactive"}`}
                  >
                    <ul>
                      <li>
                        <NavLink
                          className="liNavlink"
                          to={`/results/${props.id}/quizboard`}
                        >
                          Summary
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="liNavlink"
                          to={`/results/${props.id}/answerkey`}
                        >
                          Answer Key
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="liNavlink"
                          to={`/results/${props.id}/analysis`}
                        >
                          Result Analysis
                        </NavLink>
                      </li>
                      {/* <hr/> */}
                    </ul>
                  </nav>
                </div>

                <div className="menu-container">
                  <div onClick={onClick} className="">
                    <FaUser className="fauser" />
                  </div>
                  <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                  >
                    <ul>
                      <li>
                        <NavLink className="liNavlink" to="/profile/">
                          My Profile
                        </NavLink>
                      </li>
                      {/* <hr/> */}
                      <li>
                        <a onClick={() => handleModalShowHide()}>Logout</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <Modal
                  size="lg"
                  show={showHide}
                  centered
                  onHide={handleModalShowHide}
                  dialogClassName="formModal"
                >
                  <Modal.Body className="formContainer">
                    <div className="p-5 text-center">
                      <h3 className="p-3">
                        {data.name && data.name.toUpperCase()}, Are you sure you
                        want to log out?
                      </h3>
                      <div className="d-flex justify-content-center">
                        <div
                          className="btn btn-outline-primary btn-lg px-5 m-3"
                          onClick={handleModalShowHide}
                        >
                          NO
                        </div>
                        <div
                          className="btn btn-primary btn-lg px-5 m-3"
                          onClick={handleLogout}
                        >
                          YES
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </>
          )}
        </Navbar>
      </Styles>
    </div>
  );
}

export default ResultPortalNavbar;
