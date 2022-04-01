import "./App.css";
import React from "react";
import Overall from "./components/Overall/Overall";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import ResultsAtGlance_Teachers from "./components/ResultsAtGlance/ResultsAtGlance_Teachers";
import ResultsAtGlance_Principal from "./components/ResultsAtGlance/ResultsAtGlance_Principal";
import Analysis from "./components/Analysis/Analysis";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Responses from "./components/Responses/Responses";
import styled from "styled-components";

import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [selectedClass, setSelectedClass] = useState();
  const handleClassChange = (s) => {
    setSelectedClass(s.value);
  };
  return (
    <BrowserRouter>
      <Styles>
        <Navbar />
        {/* <div className="top">
            <button className="backbutton">&nbsp;</button>
            <div>
              <CoustomSelect onClassChange={handleClassChange} />
            </div>
          </div> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/classwiseOverview"
            element={<ResultsAtGlance_Teachers />}
          />
          <Route
            path="/performanceOverview"
            element={<ResultsAtGlance_Principal />}
          />
          <Route path="/classwiseAnalysis" element={<Overall />} />
          <Route path="/resultanalysis" element={<Analysis />} />
          <Route path="/responses" element={<Responses />} />
        </Routes>
      </Styles>
    </BrowserRouter>
  );
}

const Styles = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    margin: 90px 2vw 0 2vw;
    @media (max-width: 480px) {
      margin-top: 65px;
    }
  }
  .backbutton {
    background: none;
    border: none;
    color: #0080fe;
  }
`;

export default App;
