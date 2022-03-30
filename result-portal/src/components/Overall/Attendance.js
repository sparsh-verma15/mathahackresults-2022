import React, { useState, useContext, useEffect } from "react";
import DoughnutChart from "./DoughnutGradient";
import styled from "styled-components";
import { ClassContext } from "./Overall";
import { axiosInstance } from "../../lib/axiosAPI";

const Attendance = () => {
  const [attendance, setAttendance] = useState(93);

  const Standard = useContext(ClassContext);
  useEffect(async () => {
    try {
      const response = await axiosInstance.get("URL");
    } catch (error) {
      console.log(error);
    }
  }, [Standard]);

  const slices = [
    {
      color: "rgba(255,255,255,0.5)",
      value: 100 - attendance,
    },
    { color: "rgba(0,0,0,0)", value: attendance },
  ];

  return (
    <Styles>
      <div className="overallheading">
        Performance Analysis for Class {Standard}
      </div>
      <section>
        <div className="attHeading ">Attendance</div>
        <div
          style={{ margin: "1em 0", fontSize: "1.25rem" }}
          className="hideOnMobile"
        >
          Class {Standard} had an attendance of {attendance}% for the assessment
        </div>
        <div className="douhgnutContainer">
          <DoughnutChart data={slices} bordered="false">
            <div className="inPie">
              <div className="inPie">Attendance</div>
              <div className="inPie orange">{100 - slices[0].value}%</div>
            </div>
          </DoughnutChart>
        </div>
      </section>
    </Styles>
  );
};

const Styles = styled.div`
  width: 40vw;
  margin: 0 2vw;
  @media (min-width: 1000px) {
    position: relative;
    top: -60px;
  }
  @media (max-width: 900px) {
    width: 100vw;
    text-align: center;
    margin: 0 1vw;
  }

  .overallheading {
    font-size: 48px;
    font-weight: 700;
    color: #686868;
    @media (max-width: 480px) {
      font-size: 28px;
      margin: 0 1vw;
    }
  }
  .attHeading {
    font-size: 24px;
    font-weight: 700;
    color: #686868;
  }
  .inPie {
    font-size: 18px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  .orange {
    color: rgb(250, 108, 97);
    font-weight: bold;
    font-size: 36px;
  }
  .douhgnutContainer {
    width: 22vw;
    margin: 2vw;
    @media (max-width: 900px) {
      margin: auto;
      width: 30vw;
    }
    @media (max-width: 480px) {
      margin: auto;
      width: 50vw;
    }
  }
  .showOnMobile {
    @media (min-width: 480px) {
      display: none;
    }
  }
  .hideOnMobile {
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

export default Attendance;
