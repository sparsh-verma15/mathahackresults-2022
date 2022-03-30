import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const Container = styled.div`
  margin: 30px;
  .outer-container {
    border-bottom: 2px solid #6c6c6c;
    width: fit-content;
    margin: 0px auto;
  }
  @media (max-width: ${(props) => props.width}px) {
    .outer-container {
      width: fit-content;
    }
  }
  .bar-item-container {
    position: relative;
    padding: 0;
    margin: 0;
  }
  .bar-item-label-container {
    width: 10px;
    position: absolute;
    bottom: -32px;
    right: -5px;
    text-align: center;
    transition: 0.3s;
  }
  .bar-item-label {
    // background: rgba(245,245,245);
    // border: 2px solid #6C6C6C;
    color: #6c6c6c;
    // border-radius: 100px;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 500;
    // padding: 5px;
  }
  .bar-item {
    position: relative;
    width: 50px;
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
  // .bar-item-container:hover .bar-item-label-container {
  //     transform: scale(1.13);
  // }
  // .bar-item-container:hover .bar-item-label {
  //     border-radius: 10px;
  //     background: #f3bb14;
  //     color: white;
  //     border: 2px solid white;
  // }
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
  .x-axis-label {
    color: #6c6c6c;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 500;
    position: absolute;
    bottom: -65px;
  }
  .y-axis-label {
    color: #6c6c6c;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 500;
    position: absolute;
    left: -20px;
    bottom: 20px;
    transform-origin: 0 0;
    transform: rotate(270deg);
  }
`;

export default function Chart(props) {
  const max = Math.max(...props.data.map(([key, value]) => value));
  return (
    <Container width={props.data.length * 85 + 300}>
      <div className="position-relative outer-container px-1 d-flex text-muted justify-content-center align-items-baseline">
        <div className="bar-item-container">
          <div
            key={0}
            className="bar-item"
            style={Object.assign(
              { height: 140, visibility: "hidden" },
              "barcolor" in props ? { background: props.barcolor } : {}
            )}
          >
            <div className="bar-item-content">{}</div>
          </div>
          <div key={0} className="bar-item-label-container">
            <div className="bar-item-label">
              |<br />
              {0}
            </div>
          </div>
        </div>

        {props.data.map(([key, value], index) => (
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
              <div className="bar-item-label">
                |<br />
                {key}
              </div>
            </div>
          </div>
        ))}

        <div className="bar-item-container">
          <div
            key={0}
            className="bar-item"
            style={Object.assign(
              { height: 0 },
              "barcolor" in props ? { background: props.barcolor } : {}
            )}
          >
            <div className="bar-item-content">{}</div>
          </div>
          <div key={0} className="bar-item-label-container">
            <div className="bar-item-label">
              <br />
              {}
            </div>
          </div>
        </div>

        <div className="bottom-dot dot-left"> </div>
        <div className="bottom-dot dot-right"> </div>
        <div className="y-axis-label">
          {props.yaxis} <BsArrowRight />
        </div>
        <div className="x-axis-label">
          {props.xaxis} <BsArrowRight />
        </div>
      </div>
    </Container>
  );
}
