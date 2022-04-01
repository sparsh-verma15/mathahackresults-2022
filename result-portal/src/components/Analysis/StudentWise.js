import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ClassContext } from "./Analysis";
import { axiosInstance } from "../../lib/axiosAPI";

const StudentWise = () => {
  const standard = useContext(ClassContext);

  const [rankings, setrankings] = useState([
    {
      name: "Elon Musk",
      correct: 40,
      percentage: 100,
      sillymistake: 0,
      misconception: 0,
      unattempted: 0,
      stage2_participation: true,
    },
    {
      name: "Jeff Bezoz",
      correct: 39,
      percentage: 98,
      sillymistake: 0,
      misconception: 1,
      unattempted: 0,
      stage2_participation: false,
    },
  ]);

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("/school/results/");
      const classData = response.data[standard];
      const studentData = classData.student_wise_stats;

      let dummyArr = [];
      for (let student in studentData) {
        dummyArr.push(studentData[student]);
      }
      setrankings(dummyArr);

      //
    } catch (e) {
      console.log("Error getting Data in Student Wise");
    }
  }, [standard]);

  //implementing search in rankings
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const lowercasedSearchInput = searchInput.toLowerCase();
  const filteredRankings = rankings.filter((element) =>
    element.name.toLowerCase().includes(lowercasedSearchInput)
  );

  return (
    <Styles>
      <div className="heading_student">Student Wise Analysis</div>

      <div className="inputcontainer">
        <input
          type="text"
          className="input"
          placeholder="&#128270; Search Student Name"
          onChange={handleSearch}
        />
      </div>

      <div className="tableContainer">
        <table>
          <tr>
            <th>S.No</th>
            <th style={{ padding: "2vw 4vw" }}>Name</th>
            <th>Total Score</th>
            <th>Percentage</th>
            <th>Correct Answers</th>
            <th>Silly Mistakes</th>
            <th>Misconceptions</th>
            <th>Unattempted</th>
          </tr>
          {filteredRankings.map((element, index) => {
            return (
              <tr
                style={
                  element.stage2_participation
                    ? {
                        background: "linear-gradient(#fcdfb4,#ffc637)",
                        backgroundOrigin: "border-box",
                      }
                    : {}
                }
              >
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{element.correct}</td>
                <td>{element.percentage}</td>
                <td>{element.correct}</td>
                <td>{element.sillymistake}</td>
                <td>{element.misconception}</td>
                <td>{element.unattempted}</td>
              </tr>
            );
          })}
        </table>
        {filteredRankings.length === 0 && (
          <div className="notFound">Student fot found</div>
        )}
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  .heading_student {
    color: #0080fe;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4vh;
    margin-top: 6vh;
    @media (max-width: 920px) {
      padding-top: 3vh;
      margin-top: 0vh;
      margin-bottom: 2vh;
      font-size: 20px;
    }
  }

  .inputcontainer {
    width: 20vw;
    margin-left: auto;
    margin-right: 1vw;
    margin-bottom: 2vw;
    @media (max-width: 900px) {
      margin-right: 2em;
    }
    @media (max-width: 420px) {
      width: 50vw;
      margin-right: 0;
      margin: auto;
      margin-bottom: 2vw;
    }
  }
  .input {
    width: 20vw;
    border-radius: 5px;

    @media (max-width: 420px) {
      width: 50vw;
    }
  }

  th {
    color: #0080fe;
    padding: 1vw;
  }

  table {
    background-color: #e6efff;
    text-align: center;
    margin: 0.5vw;
  }

  tr {
    border-width: 0.5vw 1vw 0.5vw 1vw;
    border-color: #e6efff;
    border-style: solid;
    background: white;
  }
  tr:nth-child(1) {
    background-color: #e6efff;
  }
  tr:nth-last-child(1) {
    border-bottom-width: 10px;
  }
  td {
    padding: 0.5vw 0;
  }

  .tableContainer {
    overflow-x: scroll;
    margin: 2vh;
    scrollbar-width: thin;
    scrollbar-color: rebeccapurple green;
  }
  .notFound {
    border: 5px solid #e6efff;
    margin: 1.25vh;
    text-align: center;
  }
`;

export default StudentWise;
