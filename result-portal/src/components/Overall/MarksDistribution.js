import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "./DistributionChart";
import DistTable from "./DistTable";
import PerfAttTable from "./PerfAttTable";
import { ClassContext } from "./Overall";
import { axiosInstance } from "../../lib/axiosAPI";

const MarksDistribution = () => {
  const [marksDist, setMarksDist] = useState("");
  const standard = useContext(ClassContext);

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("URL");
    } catch (error) {
      console.log("Error in getting marks distribution data");
    }
  }, [standard]);
  const array = [
    ["5", "6"],
    ["10", "9"],
    ["115", "22"],
    ["20", "28"],
    ["25", "22"],
    ["30", "6"],
    ["35", "3"],
  ];

  const data1 = [
    { color: "transparent", value: 9 },
    { color: "#fdf0da82", value: 2 },
  ];
  return (
    <Styles>
      <div className="distheading">Marks Distribution of Students</div>
      <div className="outerContainer">
        <div className="chart-box">
          <Chart
            data={array}
            xaxis="Marks obtained by students"
            yaxis="Number of students"
            barcolor={"#efb730"}
          />
        </div>
        <div className="distTable">
          <DistTable />
        </div>
      </div>
      <PerfAttTable />
    </Styles>
  );
};

const Styles = styled.div`
  .outerContainer {
    display: flex;
    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .chart-box {
    border: 1px solid grey;
    border-radius: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5vw;
    width: 39vw;
    overflow-x: scroll;
    @media (max-width: 900px) {
      width: 62vw;
      margin-left: 2vw;
    }
    @media (max-width: 480px) {
      width: 95vw;
      margin: auto;
      display: block;
      height: 35vh;
    }
  }
  .distTable {
    margin: 0 1vw 3vw 1vw;
    @media (max-width: 900px) {
      width: 32vw;
      margin-left: 2.5vw;
    }
    @media (max-width: 480px) {
      width: 70vw;
      margin: auto;
      margin-top: 4vw;
    }
  }
  .distheading {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    color: #686868;
    @media (max-width: 900px) {
      margin: 2vw 0vw 2vw 0;
    }
    @media (max-width: 480px) {
      margin: 5vw 0vw 2vw 0;
    }
  }
`;

export default MarksDistribution;
