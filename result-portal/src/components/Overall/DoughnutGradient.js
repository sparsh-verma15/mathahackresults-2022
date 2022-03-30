import React from "react";
import styled from "styled-components";

import { PieChart } from "react-minimal-pie-chart";

function Doughnut(props) {
  const animation_time = "0.7s";
  const OuterContainer = styled.div`
    .outerContainer {
      width: 100%;
    }
    .outerCircle {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-top: 100%;
      border-radius: 50%;
      // background: transparent linear-gradient(141deg, #eaebf3 0%, #e9eaf2 100%) 0% 0% no-repeat padding-box;
      box-shadow: 4px 4px 30px -10px rgba(0, 0, 0, 0.23),
        5px 5px 20px -10px #eaebf3;
    }
    .pieCircle {
      top: 5%;
      position: absolute;
      display: flex;
      justify-content: center;
      width: 90%;
      padding-top: 90%;
      border-radius: 50%;
      background: linear-gradient(to bottom, #ffa000, #f53595);
      animation-name: piehover-reverse;
      animation-duration: ${animation_time};
    }
    .contentCircle {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 20%;
      width: 60%;
      padding-top: 60%;
      border-radius: 50%;
      margin: auto;
      background: transparent linear-gradient(142deg, #f8f8fb 0%, #d6d5e8 100%)
        0% 0% no-repeat padding-box;
      // background: white;
      box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
      vertical-align: middle;
      transform-origin: 50% 50%;
    }
    .content {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation-name: content-reverse;
      animation-duration: ${animation_time};
    }
    svg {
      margin: 0;
      padding: 0;
      display: inline-block;
      position: absolute;
      top: 0;
      vertical-align: middle;
      transform-origin: 50% 50%;
      transform: scale(1.03);
      animation-name: svghover-reverse;
      animation-duration: ${animation_time};
    }
    @keyframes svghover {
      0% {
        transform: scale(1.03) rotate(0);
      }
      50% {
        transform: scale(0.7) rotate(0);
      }
      100% {
        transform: scale(1.03) rotate(90deg);
      }
    }
    @keyframes svghover-reverse {
      0% {
        transform: scale(1.03) rotate(90deg);
      }
      50% {
        transform: scale(0.7) rotate(0);
      }
      100% {
        transform: scale(1.03) rotate(0);
      }
    }
    @keyframes piehover {
      0% {
        transform: scale(1) rotate(0);
      }
      100% {
        transform: scale(1.15) rotate(90deg);
      }
    }
    @keyframes piehover-reverse {
      0% {
        transform: scale(1.15) rotate(90deg);
      }
      100% {
        transform: scale(1) rotate(0);
      }
    }
    @keyframes content {
      0% {
        transform: scale(1) rotate(0);
      }
      100% {
        transform: scale(1) rotate(-90deg);
      }
    }
    @keyframes content-reverse {
      0% {
        transform: scale(1) rotate(-90deg);
      }
      100% {
        transform: scale(1) rotate(0);
      }
    }
    ${props.hover
      ? `.outerContainer:hover svg{
            transform: scale(1.03) rotate(90deg);
            animation-name: svghover;
            animation-duration: ${animation_time};
        }
        .outerContainer:hover .pieCircle{
            transform: scale(1.15) rotate(90deg);
            animation-name: piehover;
            animation-duration: ${animation_time};
        }
        .outerContainer:hover .content {
            transform: scale(1) rotate(-90deg);
            animation-name: content;
            animation-duration: ${animation_time};
        }`
      : ""}
  `;
  return (
    <OuterContainer>
      <div className="outerContainer">
        <div className="outerCircle">
          <div
            className="pieCircle"
            style={{ background: `${props.background}` }}
          >
            <PieChart
              data={props.data}
              startAngle={-90}
              labelStyle={{
                fontSize: "0.625rem",
                fontColor: "FFFFFA",
                fontWeight: "800",
              }}
              labelPosition={65}
            />
            <div className="contentCircle">
              <div className="content">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </OuterContainer>
  );
}

export default Doughnut;
