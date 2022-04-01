import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DifficultyWise from "./DifficultyWise";
import ConceptWise from "./ConceptWise";
import StudentWise from "./StudentWise";
import Round2List from "./Round2List";
import { useNavigate } from "react-router-dom";
import CoustomSelect from "../CoustomSelect";
import axios from "axios";
import { axiosInstance } from "../../lib/axiosAPI";

export const ClassContext = React.createContext("1"); //import context wherever needed

const Analysis = () => {
  const [option, setOption] = useState(1); //0 for conceptwise 1 for difficulty wise 2 for studentwise
  const [selectedClass, setSelectedClass] = useState(1);
  const handleClassChange = (s) => {
    setSelectedClass(s.value);
  };

  //conceptwise changes to chapter wise

  const conceptwiseClicked = () => {
    setOption(1);
  };
  const diffwiseClicked = () => {
    setOption(2);
  };
  const studentwiseClicked = () => {
    setOption(3);
  };
  const round2Clicked = () => {
    setOption(4);
  };

  const [chapterListArray, setChapterListArray] = useState([
    //passed as props to conceptwise and diff wise
    //if get request working, make this an empty array
    "Real Numbers",
    "Polynomials",
    "Pair Of Linear Equations In Two Variables",
    "Quadratic Equations",
    "Arithmetic Progressions",
    "Triangles",
    "Coordinate Geometry",
    "Introduction To Trigonometry",
    "Some Applications Of Trigonometry",
    "Circles",
    "Constructions",
    "Areas Related To Circles",
    "Surface Areas And Volumes",
    "Statistics",
    "Probability",
  ]);

  const [sortedChpaterList, setSortedChapterList] = useState([]);

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("/school/results/");
      const classData = response.selectedClass;
      const chaptersObject = classData.chapters_num_of_ques;

      //setting array of chapters in order
      let chArr = [];
      for (let element in chaptersObject) {
        chArr.push(element);
      }
      setChapterListArray(chArr);

      // let numberArray = []; //array with randomly ordered chapter numbers
      // for (let element in chaptersObject) {
      //   numberArray.push(element.chapter_number);
      // }

      // numberArray.sort(function (a, b) {
      //   return a - b;
      // }); //array with sorted chapter numbers

      // let chapterNumberObject = {}; //object with key as chapter number and value as chapter name
      // for (let i in numberArray) {
      //   for (let element in chaptersObject) {
      //     if (element.chapter_number === i) {
      //       chapterNumberObject[i] = element;
      //     }
      //   }
      // }
      // //Now we have chapter number and name in an order in chapterNumberObject
    } catch (error) {
      console.log("Error Getting data in Analysis");
    }
  }, [selectedClass]);

  const onDesktop = () => {
    if (window.innerWidth >= 900) {
      return true;
    }
    return false;
  };

  // const difficultyLevel = "Hard";
  // let diffColor;
  // if (difficultyLevel === "Hard") {
  //   diffColor = "#f1480b";
  // } else if (difficultyLevel === "Moderate") {
  //   diffColor = "#fda50f";
  // } else {
  //   diffColor = "#06dc5c";
  // }
  return (
    <Styles>
      <ClassContext.Provider value={selectedClass}>
        <div className="section">
          <div className="top-container">
            <div className="heading">
              Result Analysis for Class {selectedClass}
            </div>
            <div className="selectContainer">
              <CoustomSelect onClassChange={handleClassChange} />
            </div>
          </div>

          <div className="container1">
            <div className="buttons">
              <button
                className="button"
                onClick={conceptwiseClicked}
                style={
                  option === 1
                    ? onDesktop()
                      ? {
                          borderTopRightRadius: "0",
                          borderBottomRightRadius: "0",
                          background: "#0080fe",
                          color: "#fff",
                        }
                      : { background: "#0080fe", color: "#fff" }
                    : {}
                }
              >
                CHAPTER WISE
              </button>
              <button
                className="button"
                onClick={diffwiseClicked}
                style={
                  option === 2
                    ? onDesktop()
                      ? {
                          borderTopRightRadius: "0",
                          borderBottomRightRadius: "0",
                          background: "#0080fe",
                          color: "#fff",
                        }
                      : { background: "#0080fe", color: "#fff" }
                    : {}
                }
              >
                DIFFICULTY LEVEL WISE
              </button>
              <button
                className="button"
                onClick={studentwiseClicked}
                style={
                  option === 3
                    ? onDesktop()
                      ? {
                          borderTopRightRadius: "0",
                          borderBottomRightRadius: "0",
                          background: "#0080fe",
                          color: "#fff",
                        }
                      : { background: "#0080fe", color: "#fff" }
                    : {}
                }
              >
                STUDENT WISE
              </button>
              <button
                className="button"
                onClick={round2Clicked}
                style={
                  option === 4
                    ? onDesktop()
                      ? {
                          borderTopRightRadius: "0",
                          borderBottomRightRadius: "0",
                          background: "#0080fe",
                          color: "#fff",
                        }
                      : { background: "#0080fe", color: "#fff" }
                    : {}
                }
              >
                STAGE II FINALISTS
              </button>
            </div>
            <div className="analysisContainer">
              {option === 1 && (
                <ConceptWise chapterListArray={chapterListArray} />
              )}
              {option === 2 && (
                <DifficultyWise chapterListArray={chapterListArray} />
              )}
              {option === 3 && <StudentWise />}
              {option === 4 && <Round2List />}
            </div>
            {(option === 1 || option === 2) && (
              <div className="chapterListWeb hideOnMobile">
                <table className="tableAnalysis">
                  {chapterListArray.map((element, index) => {
                    return (
                      <tr className="trow">
                        <th style={{ padding: "2px" }} className="theading">
                          Chapter {index + 1}
                        </th>
                        <td
                          style={{ padding: "0", width: "150px" }}
                          className="tdata"
                        >
                          {element}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}
          </div>
        </div>
      </ClassContext.Provider>
    </Styles>
  );
};

const Styles = styled.div`
  .heading {
    font-size: 48px;
    font-weight: 700;
    color: #686868;
    margin-bottom: 10px;
    @media (max-width: 900px) {
      text-align: center;
    }
  }
  .top-container {
    display: flex;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      margin-top: 60px;
      margin-bottom: 10px;
      flex-direction: column;
    }
  }
  .selectContainer {
    margin-left: auto;
    @media (max-width: 480px) {
      margin: auto;
    }
  }
  .section {
    margin: 1vw 3vw;
    @media (max-width: 480px) {
      margin: 1vw 3vw;
    }
  }

  .container1 {
    display: flex;

    @media (max-width: 900px) {
      display: block;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    @media (min-width: 1000px) {
      position: relative;
      right: 5px;
      top: 50px;
    }
    @media (max-width: 900px) {
      flex-direction: row;
      justify-content: center;
    }
  }
  .button {
    background: none;
    padding: 1.5vw;
    margin: 0.5em 0;
    border: 1px solid #0090ff;
    font-weight: 700;
    color: #0090ff;
    border-radius: 10vh;
    @media (max-width: 900px) {
      margin: 0.5em 0.5em;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      margin: 0.5em 0em;
    }
  }

  .analysisContainer {
    position: relative;
    border-radius: 75px;
    box-shadow: 0px 0px 40px rgba(9, 132, 253, 0.2);
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .chapterListWeb {
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    top: 80px;
    align-self: flex-start;
    margin-left: 10px;
  }

  .tableAnalysis {
    border-collapse: separate;
  }
  .tdata,
  .theading {
    text-align: center;
    border-radius: 0.2em;
  }
  .theading {
    background: #efb730;
    width: 100px;
    color: white;
  }
  .tdata {
    background-color: rgba(221, 218, 218, 0.4);
  }

  .showOnMobile {
    @media (min-width: 900px) {
      display: none;
    }
  }
  .hideOnMobile {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Analysis;
