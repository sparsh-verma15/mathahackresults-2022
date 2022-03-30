import React, { useState, useEffect, useContext } from "react";
import DoughnutChart from "./Doughnut";
import styled from "styled-components";
import { axiosInstance } from "../../lib/axiosAPI";

const ResultsAtGlance_Principal = () => {
  const [data, setData] = useState({
    overall_school_average: 1.25,
    bestPerfomrmingClass: "X",
    bestClassAverge: "34",
    totalScore: "35",
    bestClassPercentage: "97.14%",
    lowestPerfomrmingClass: "IX",
    lowestClassAverge: "20",
    lowestClassPercentage: "76.4%",
    overallSchoolPerformance: "",
  });

  const SchoolPerformance = (overall_school_average) => {
    if ((overall_school_average / 5) * 100 >= 40) {
      return "Excellent";
    } else if ((overall_school_average / 5) * 100 >= 20) {
      return "Moderate";
    } else {
      return "Subpar";
    }
  };

  useEffect(async () => {
    setData((prevState) => {
      return {
        ...prevState,
        overallSchoolPerformance: SchoolPerformance(
          data.overall_school_average
        ),
      };
    });
    try {
      const response = await axiosInstance.get("URL");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const slicesAverage = [
    { color: "rgba(255,255,255,0.5)", value: 5 - data.overall_school_average },
    {
      color: "rgba(0,0,0,0)",
      value: data.overall_school_average,
    },
  ];

  return (
    <Styles>
      <div className="heading">Results at a Glance for Math-a-Hack 2.0</div>
      <div className="outerContainer">
        <div className="doughnutContainer">
          <div className="doughnutInner">
            <DoughnutChart data={slicesAverage} bordered="false">
              <div className="inPie">
                <div>Overall School Performance</div>
                <div>
                  <span style={{ fontSize: "1.5em" }}>
                    <span
                      style={{
                        color: "rgb(250, 108, 97)",
                        fontWeight: "700",
                        fontSize: "1.5em",
                      }}
                    >
                      {data.overall_school_average}
                    </span>
                    /5
                  </span>
                </div>
              </div>
            </DoughnutChart>
          </div>

          <div
            style={{
              fontWeight: "bold",
              color: `${
                data.overallSchoolPerformance.toLowerCase() === "excellent"
                  ? "#00ff33"
                  : data.overallSchoolPerformance.toLowerCase() === "moderate"
                  ? "#fda50f"
                  : "#f12222"
              }`,
            }}
            className="schoolPerf"
          >
            {data.overallSchoolPerformance} Performance
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="rightPanel">
          <div className="innerContainer">
            <div
              style={{ color: "#686868", fontWeight: "700" }}
              className="property"
            >
              Highest Performing Class
            </div>
            <div style={{ color: "#00ff33" }} className="propertyValue">
              Class {data.bestPerfomrmingClass}
            </div>
            <div style={{ color: "#686868" }} className="property">
              Class Average Marks
            </div>
            <div className="propertyValue">
              <span
                style={{
                  fontSize: "1.5em",
                  color: "#00ff33",
                  fontWeight: "700",
                }}
              >
                {data.bestClassAverge}
              </span>
              <span style={{ fontWeight: "normal", color: "#686868" }}>
                /{data.totalScore}
              </span>
            </div>
            <div style={{ color: "#686868" }} className="property">
              Class Average Percentage
            </div>
            <div style={{ color: "#00ff33" }} className="propertyValue">
              {data.bestClassPercentage}
            </div>
          </div>
          <div className="innerContainer">
            <div
              style={{ color: "#686868", fontWeight: "700" }}
              className="property"
            >
              Lowest Performing Class{" "}
            </div>
            <div style={{ color: "#f1480b" }} className="propertyValue">
              Class {data.lowestPerfomrmingClass}
            </div>
            <div style={{ color: "#686868" }} className="property">
              Class Average Marks
            </div>
            <div className="propertyValue">
              <span
                style={{ fontSize: "1.5em", color: "red", fontWeight: "700" }}
              >
                {data.lowestClassAverge}
              </span>
              <span style={{ fontWeight: "normal", color: "#686868" }}>
                /{data.totalScore}
              </span>
            </div>
            <div style={{ color: "#686868" }} className="property">
              Class Average Percentage
            </div>
            <div style={{ color: "#f1480b" }} className="propertyValue">
              {data.lowestClassPercentage}
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  .heading {
    font-size: 48px;
    color: #686868;
    font-weight: 700;
    text-align: center;
    margin: 2vw;
    margin-top: 90px;
    @media (max-width: 480px) {
      font-size: 32px;
      margin-top: 60px;
    }
  }

  .doughnutContainer {
    width: 33%;
    @media (max-width: 1000px) {
      width: 60vw;
      margin: auto;
    }
    @media (max-width: 480px) {
      width: 100vw;
    }
  }
  .doughnutInner {
    @media (max-width: 480px) {
      width: 100vw;
    }
  }
  .inPie {
    font-size: 18px;
    text-align: center;
    padding: 2vw;

    @media (max-width: 480px) {
      font-size: 3.5vw;
    }
  }

  .outerContainer {
    margin: 1em 3em;
    display: flex;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .verticalLine {
    height: 60vh;
    border: 1px solid black;
    border-width: 0 2px 0 0;
    margin: 0 5em;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  .innerContainer {
    margin: 0 2em;
    @media (max-width: 480px) {
      margin-top: 1.5em;
    }
  }

  .property {
    font-size: 24px;
    text-align: center;
    margin: 0.75em 0;
    @media (max-width: 480px) {
      margin: 0.5em 0;
      font-size: 20px;
      width: 100vw;
    }
  }
  .propertyValue {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .schoolPerf {
    font-size: 32px;
    text-align: center;
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
  .rightPanel {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default ResultsAtGlance_Principal;
