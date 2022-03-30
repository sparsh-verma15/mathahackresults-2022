import React, { useState, useContext, useEffect } from "react";
import DoughnutChart from "./Doughnut";
import styled from "styled-components";
import { ClassContext } from "../../App";
import { axiosInstance } from "../../lib/axiosAPI";
import CoustomSelect from "../CoustomSelect";

const ResultsAtGlance = () => {
  const [data, setData] = useState({
    //store all responses from backend in data state
    attendance: 93,
    averageScore: 30,
    highestScore: 33,
    lowestScore: 16,
    totalScore: 40,
    difficultyLevel: "Hard",
    overallPerf: "Excellent",
  });
  const [selectedClass, setSelectedClass] = useState(1);
  const handleClassChange = (s) => {
    setSelectedClass(s.value);
  };

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("URL");
    } catch (error) {
      console.log(error);
    }
  }, [selectedClass]);

  const slicesAverage = [
    {
      color: "rgba(255,255,255,0.5)",
      value: data.totalScore - data.averageScore,
    },
    { color: "rgba(0,0,0,0)", value: data.averageScore },
  ];
  const slicesAttendance = [
    {
      color: "rgba(255,255,255,0.5)",
      value: 100 - data.attendance,
    },
    { color: "rgba(0,0,0,0)", value: data.attendance },
  ];

  return (
    <Styles>
      <div className="heading">
        Results at a Glance for Class {selectedClass}
      </div>
      <div className="selectContainer">
        <CoustomSelect onClassChange={handleClassChange} />
      </div>
      <div className="outercontainer">
        <div className="chartcontainer">
          <div className="charts">
            <div className="doughnutchart">
              <DoughnutChart
                data={slicesAverage}
                bordered="false"
                width="300px"
              >
                <div className="inPie">
                  <div>Class Average</div>
                  <div>
                    <span style={{ fontSize: "1.5em" }}>
                      <span
                        style={{
                          color: "rgb(250, 108, 97)",
                          fontWeight: "700",
                          fontSize: "1.5em",
                        }}
                      >
                        {data.averageScore}
                      </span>
                      /{data.totalScore}
                    </span>
                  </div>
                  <div>{((data.averageScore / 35) * 100).toFixed(2)}%</div>
                </div>
              </DoughnutChart>
            </div>
            <div className="doughnutchart">
              <DoughnutChart
                data={slicesAttendance}
                bordered="false"
                width="300px"
              >
                <div className="inPieAtt">
                  <div className="inPieAtt">Attendance</div>
                  <div className="inPieAtt orange">
                    {100 - slicesAttendance[0].value}%
                  </div>
                </div>
              </DoughnutChart>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="scoresContainer">
            <div className="text">
              Highest Score
              <div>
                <span
                  style={{
                    fontSize: "36px",
                    color: "#00ff33",
                    fontWeight: "700",
                  }}
                >
                  {data.highestScore}
                </span>
                /{data.totalScore}
              </div>
            </div>
            <div className="text">
              Lowest Score
              <div>
                <span
                  style={{ fontSize: "36px", color: "red", fontWeight: "700" }}
                >
                  {data.lowestScore}
                </span>
                /{data.totalScore}
              </div>
            </div>
            <div className="text">
              Difficulty Level
              <div>
                <span
                  style={{
                    fontSize: "36px",
                    color: `${
                      //color based on difficulty
                      data.difficultyLevel.toLowerCase() === "hard"
                        ? "#f12222"
                        : data.difficultyLevel.toLowerCase() === "easy"
                        ? "#06dc5c"
                        : "#fda50f"
                    }`,
                    fontWeight: "700",
                  }}
                >
                  {data.difficultyLevel}
                </span>
              </div>
            </div>
          </div>

          <div
            className="text"
            style={{ marginTop: "3vw", textAlign: "center" }}
          >
            <span>Overall Class Performance:</span>

            <div style={{ fontSize: "1.5em", color: "#00ff33" }}>
              {data.overallPerf} Performance
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  .outercontainer {
    display: flex;
    align-items: center;
    margin: 0 5vw;
    flex-wrap: wrap;
    @media (max-width: 1500px) {
      justify-content: center;
    }
    @media (max-width: 480px) {
      margin-bottom: 20px;
    }
  }

  .heading {
    font-size: 48px;
    color: #686868;
    font-weight: 700;
    text-align: center;
    margin: 2vw;
    margin-top: 80px;
    @media (max-width: 480px) {
      font-size: 32px;
      margin-top: 60px;
    }
  }
  .selectContainer {
    margin-left: auto;
    width: 300px;
    @media (min-width: 1000px) {
      position: relative;
      bottom: 30px;
    }
    @media (max-width: 1000px) {
      width: 250px;
    }

    @media (max-width: 480px) {
      margin: auto;
      width: 200px;
    }
  }
  .inPie {
    font-size: 18px;
    text-align: center;
    padding: 2vw;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  .inPieAtt {
    font-size: 20px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  .orange {
    color: rgb(250, 108, 97);
    font-size: 40px;
    font-weight: bold;
  }
  .doughnutchart {
    margin: 1em;
    @media (max-width: 480px) {
      margin: 2vw 0.5vw;
    }
  }
  .charts {
    display: flex;
    justify-content: center;
    overflow-x: scroll;
    flex-wrap: wrap;
  }
  .chartcontainer {
    box-shadow: 0px 0px 30px #cce1ff;
    border-radius: 5em;
    padding: 2em 1em;
    @media (max-width: 900px) {
      width: 90vw;
      margin: 1.5em 0;
    }
  }
  .scoresContainer {
    display: flex;

    @media (min-width: 900px) {
      width: 35vw;
    }
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .text {
    font-size: 24px;
    color: #686868;
    text-align: center;
    margin: 1vw 1.7vw;
    @media (max-width: 1500px) {
      margin: 2vw 10vw;
    }
    @media (max-width: 480px) {
      margin: 3vw 5vw;
    }
  }

  .rightContainer {
    margin-left: 5vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1500px) {
      margin-top: 4vh;
    }
    @media (max-width: 480px) {
      margin-top: 2vh;
    }
  }
`;

export default ResultsAtGlance;
