import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const Container = styled.div`
  margin: 30px;
  .outer-container {
    border-bottom: 2px solid #6c6c6c;
    width: fit-content;
    margin: 0px auto;
    position: relative;
  }
  @media (max-width: ${(props) => props.width}px) {
    .outer-container {
      width: fit-content;
    }
  }
  .bar-item-container {
    position: relative;
    padding: 0px 15px;
    margin: 0px 10px;
  }
  .bar-item-label-container {
    position: absolute;
    bottom: -16px;

    left: 0;
    right: 0;
    text-align: center;
    transition: 0.3s;
  }
  .bar-item-label {
    background: rgba(245, 245, 245);
    border: 2px solid #6c6c6c;
    color: #6c6c6c;
    border-radius: 100px;
    overflow-wrap: break-word;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 5px;
  }
  .bar-item {
    position: relative;
    width: 42px;
    background: linear-gradient(to bottom, #ffa000, #f53595);
    border: 2px solid #f6f2e2;
    border-radius: 10px;
    transition: 0.3s;
  }
  .bar-item-content {
    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .bar-item-container:hover .bar-item {
    transform: scaleX(1.1) translateY(-25px);
    border: 2px solid white;
    background: #f3bb1499;
  }
  .bar-item-container:hover .bar-item-label-container {
    transform: scale(1.13);
  }
  .bar-item-container:hover .bar-item-label {
    border-radius: 10px;
    background: #f3bb14;
    color: white;
    border: 2px solid white;
  }
  .bottom-dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #6c6c6c;
    position: absolute;
    bottom: -5px;
  }
  .dot-left {
    left: -5px;
  }
  .dot-right {
    right: -5px;
  }
  .ytitle {
    position: absolute;
    bottom: 100px;
    left: -50px;
    transform: rotate(0.75turn);
  }
`;

export default function Chart(props) {
  const max = Math.max(...Object.values(props.data));
  return (
    <Container width={Object.keys(props.data).length * 85 + 300}>
      <div className="position-relative outer-container px-1 px-lg-5 d-flex text-muted justify-content-center align-items-baseline">
        {Object.entries(props.data).map(([key, value], index) => (
          <div className="bar-item-container">
            <div
              key={key}
              className="bar-item"
              style={Object.assign(
                { height: max ? (10 * value) / max + "rem" : 0 },
                "color" in props ? { background: props.color[index] } : {},
                "barcolor" in props ? { background: props.barcolor } : {}
              )}
            >
              <div className="bar-item-content">{value}</div>
            </div>
            <div key={key} className="bar-item-label-container">
              <div
                style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
                className="bar-item-label"
              >
                {String(key)}
              </div>
            </div>
          </div>
        ))}
        <div className="bottom-dot dot-left"> </div>
        <div className="bottom-dot dot-right"> </div>
        <div className="ytitle">
          {props.ytitle}
          {props.ytitle && <span>&#8594;</span>}
        </div>
      </div>
    </Container>
  );
}
