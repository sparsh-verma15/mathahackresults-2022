import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

const Styles = styled.div`
  #App {
    font-family: sans-serif;
    height: 80vh;
  }
  #page-wrap {
    text-align: center;
    overflow: hidden;
    top: 45%;
    position: relative;
  }
  .bm-menu-wrap {
    overflow-x: hidden;
    overflow-y: hidden;
    // background: #ffffff;
    box-shadow: 0px 0px 20px #006be073;
    left: 0px;
    top: 82px;
  }
  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    padding: 10px 0px;
    color: #007dfb;
    transition: color 0.2s;
    background: white;
    font-size: 1.15rem;
    font-weight: 600;
    text-align: left;
  }
  a {
    outline: none;
  }
  .bm-item:hover {
    opacity: 0.8;
  }
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 24px;
    top: 26px;
  }
  @media screen and (max-width: 467px) {
    .bm-menu-wrap {
      top: 52px;
    }
    .bm-burger-button {
      width: 24px;
      height: 20px;
      left: 16px;
      top: 16px;
    }
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: white;
  }
  /* Position and sizing of clickable cross button */
  //   .bm-cross-button {
  //     height: 24px;
  //     width: 24px;
  //   }
  /* Color/shape of close button cross */
  //   .bm-cross {
  //     background: #007cfa;
  //   }
  /* General sidebar styles */
  .bm-menu {
    background: #ffffff;
    padding: 20px;
    // font-size: 1.15em;
    text-align: center;
    overflow: hidden !important;
    box-shadow: 0px 0px 30px #0000001a;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #ffffff;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #007cfa;
    background: #ffffff;
  }
  /* Styling of overlay */
  //   .bm-overlay {
  //     background: rgba(0, 0, 0, 0.3);
  //   }
  .divider {
    display: block;
    border: 0.25px solid white;
    box-shadow: 0px 0px 1px #007dfb;
    background: rgb(112, 112, 112);
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;

class ResultPortalBurgerMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styles>
        <Menu
          noOverlay
          customCrossIcon={false}
          width={window.matchMedia("(max-width: 467px)").matches ? 240 : 300}
        >
          {/* <a id="dashboard" className="menu-item" href="/dashboard"> */}
          {/* <a id="dashboard" className="menu-item" href="/profile">
            My Profile
          </a> */}
          {/* <hr className="divider" /> */}
          <a id="tests" className="menu-item" href="/tests">
            Tests
          </a>
          <a
            id="result"
            className="menu-item"
            style={{
              pointerEvents: `${this.usertype ? "none" : ""}`,
              color: `${this.usertype ? "grey" : ""}`,
            }}
            href="/results/overall/"
          >
            Result Portal
          </a>
          {/* <a
            id="class"
            className="menu-item"
            style={{
              pointerEvents: `${this.usertype ? "none" : ""}`,
              color: `${this.usertype ? "grey" : ""}`,
            }}
            href="/liveclass"
          >
            Class
          </a> */}
          {/* <a
            id="studymap"
            className="menu-item"
            style={{
              pointerEvents: `${this.usertype ? "none" : ""}`,
              color: `${this.usertype ? "grey" : ""}`,
            }}
            href="/studymap"
          >
            Study Plan
          </a> */}
          {/* <a
            id="adaptive"
            className="menu-item"
            style={{
              pointerEvents: `${this.usertype ? "none" : ""}`,
              color: `${this.usertype ? "grey" : ""}`,
            }}
            href="/adaptive"
          >
            Adaptive
          </a> */}
          {/* <a
            id="result"
            className="menu-item"
            style={{
              pointerEvents: `${this.usertype ? "none" : ""}`,
              color: `${this.usertype ? "grey" : ""}`,
            }}
            href="/async"
          >
            Async Test
          </a> */}
          {/*<a id="result" className="menu-item" style={{pointerEvents: `${this.usertype ? "" : "none"}`, color: `${this.usertype ? "" : "grey"}`}} href="/liveclass">
            Live Class
          </a>
          <hr className="divider"/>
          <a id="tests" className="menu-item" style={{pointerEvents: `${this.usertype ? "none" : ""}`, color: `${this.usertype ? "grey" : ""}`}} href="/peer">
            Peer Learning Group
          </a>
          <a id="result" className="menu-item" style={{pointerEvents: `${this.usertype ? "none" : ""}`, color: `${this.usertype ? "grey" : ""}`}} href="/mentor">
            One-on-one Mentoring
          </a>
          <a id="result" className="menu-item" style={{pointerEvents: `${this.usertype ? "none" : ""}`, color: `${this.usertype ? "grey" : ""}`}} href="/tracker">
            Tracker
          </a>
    <hr className="divider"/>*/}
          {/* <a
            id="contact"
            className="menu-item"
            style={{
              pointerEvents: `${this.usertype ? "none" : ""}`,
              color: `${this.usertype ? "grey" : ""}`,
            }}
            href="/settings"
          >
            Account Settings
          </a> */}
        </Menu>
      </Styles>
    );
  }
}
export default ResultPortalBurgerMenu;
