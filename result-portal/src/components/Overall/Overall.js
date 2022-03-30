import React, { useState } from "react";
import Attendance from "./Attendance";
import MarksDistribution from "./MarksDistribution";
import styled from "styled-components";
import CoustomSelect from "../CoustomSelect";

export const ClassContext = React.createContext("1"); //import context wherever needed

const Overall = () => {
  const [selectedClass, setSelectedClass] = useState(1);
  const handleClassChange = (s) => {
    setSelectedClass(s.value);
  };

  return (
    <Styles>
      <div className="selectContainer">
        <CoustomSelect onClassChange={handleClassChange} />
      </div>
      <div className="pageContent">
        <ClassContext.Provider value={selectedClass}>
          <Attendance />
          <MarksDistribution />
        </ClassContext.Provider>
      </div>
    </Styles>
  );
};

export default Overall;

const Styles = styled.div`
  .heading {
    font-size: 48px;
    font-weight: 700;
    @media (max-width: 900px) {
      font-size: 32px;
    }
  }
  .pageContent {
    display: flex;
    @media (max-width: 900px) {
      flex-wrap: wrap;
    }
  }
  .backbutton {
    background: none;
    border: none;
    color: #0080fe;
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin: 0.5vw 2vw;
  }
  .selectContainer {
    margin-top: 80px;
    margin-left: auto;
    width: 200px;

    @media (max-width: 900px) {
      width: 200px;
    }
    @media (max-width: 480px) {
      width: 200px;

      margin: auto;
      margin-top: 80px;
    }
  }
`;
