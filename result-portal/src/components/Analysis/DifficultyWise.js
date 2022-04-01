import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import DifficultyChart1 from "../BarChart";
import DifficultyChart2 from "./DiffWiseChart";
import { BsFillSquareFill } from "react-icons/bs";
import { axiosInstance } from "../../lib/axiosAPI";
import { ClassContext } from "./Analysis";

const DifficultyWise = (props) => {
  const standard = useContext(ClassContext);

  const [diffData, setDiffData] = useState({
    1: "Easy",
    2: "medium",
    3: "Hard",
    4: "Easy",
    5: "medium",
    6: "Hard",
    7: "Easy",
    8: "medium",
    9: "Hard",
    10: "Easy",
    11: "medium",
    12: "Hard",
    13: "Easy",
    14: "medium",
    15: "Hard",
  });

  //calcualtes array of colors based on chapter difficulty
  const colorsData2dummy = Object.keys(diffData).map((element) => {
    if (diffData[element].toLowerCase() === "easy") {
      return "#06dc5c";
    } else if (diffData[element].toLowerCase() === "medium") {
      return "#fda50f";
    } else {
      return "#f1480b";
    }
  });

  //for calculating length of bars based on chapter difficulty
  let diffOfChapterLengthdummy = {};
  for (let element in diffData) {
    if (diffData[element].toLowerCase() === "easy") {
      diffOfChapterLengthdummy[element] = 5;
    }
    if (diffData[element].toLowerCase() === "medium") {
      diffOfChapterLengthdummy[element] = 10;
    }
    if (diffData[element].toLowerCase() === "hard") {
      diffOfChapterLengthdummy[element] = 15;
    }
  }

  const [Chart1Data, setChart1Data] = useState({
    Easy: 5,
    Moderate: 20,
    Difficult: 15,
  });
  const [chart2Data, setChart2Data] = useState(diffOfChapterLengthdummy);
  const [colorsChart2, setcolorsChart2] = useState(colorsData2dummy);

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("/school/results/");
      const classData = response.data[standard];
      const chapterData = classData.chapters_num_of_ques;

      //for chart 1
      setChart1Data({
        Easy: classData.difficulty_num_of_questions.easy,
        Moderate: classData.difficulty_num_of_questions.medium,
        Difficult: classData.difficulty_num_of_questions.hard,
      });
      //

      //for chart 2
      let dummyObj = {};
      for (let element in chapterData) {
        dummyObj[element] = chapterData[element].chapter_difficulty;
      }
      setDiffData(dummyObj);

      const colorsData2 = Object.keys(diffData).map((element) => {
        if (diffData[element].toLowerCase() === "easy") {
          return "#06dc5c";
        } else if (diffData[element].toLowerCase() === "medium") {
          return "#fda50f";
        } else {
          return "#f1480b";
        }
      });
      setcolorsChart2(colorsData2); //colors of chart 2

      let diffOfChapterLength = {};
      for (let element in diffData) {
        if (diffData[element].toLowerCase() === "easy") {
          diffOfChapterLength[element] = 5;
        }
        if (diffData[element].toLowerCase() === "medium") {
          diffOfChapterLength[element] = 10;
        }
        if (diffData[element].toLowerCase() === "hard") {
          diffOfChapterLength[element] = 15;
        }
      }
      setChart2Data(diffOfChapterLength); //set bar length of each chapter

      //
    } catch (error) {
      console.log("Error getting data in difficulty wise");
    }
  }, [standard]);

  return (
    <Styles>
      <div className="p-1 text-center">
        <div className="">
          <div>
            <div className="diffheading">
              No. of Questions in Each Difficulty Level
            </div>
            <div className="chartContainer">
              <DifficultyChart1
                data={Chart1Data}
                color={["#06dc5c", "#fda50f", "#f1480b"]}
              />
            </div>
          </div>
          <div className="chapterListMobile showOnMobile">
            <table>
              <tr>
                {props.chapterListArray.map((element, index) => {
                  return <th>Chapter {index + 1}</th>;
                })}
              </tr>
              <tr>
                {props.chapterListArray.map((element, index) => {
                  return <td>{element}</td>;
                })}
              </tr>
            </table>
          </div>
          <div className="diffheading">Difficulty Level of each Chapter</div>
          <div className="difficultyLegend">
            <div style={{ color: "#06dc5c" }}>
              Easy <BsFillSquareFill />
            </div>
            <div style={{ color: "#fda50f" }}>
              Moderate <BsFillSquareFill />
            </div>
            <div style={{ color: "#f1480b" }}>
              Hard <BsFillSquareFill />
            </div>
          </div>
          <div className="chartContainer">
            <DifficultyChart2
              data={chart2Data}
              color={colorsChart2}
              xtitle={"Chapter"}
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  .diffheading {
    color: #0080fe;
    font-size: 32px;
    font-weight: 700;
    margin-top: 2vh;
    margin-bottom: 10vh;
    @media (max-width: 920px) {
      margin-bottom: 4vh;
      font-size: 20px;
    }
  }

  .buttonback {
    border: none;
    background: none;
    color: #0080fe;
    position: absolute;
    left: 1vw;
    top: 40%;
  }
  .buttonnext {
    border: none;
    color: #0080fe;
    background: none;
    position: absolute;
    right: 1vw;
    top: 40%;
  }
  .carouselContainer {
    position: relative;
  }
  .chartContainer {
    overflow-x: scroll;
    overflow-y: scroll;
    height: 40vh;
    @media (max-width: 920px) {
      height: 25vh;
    }
    @media (max-width: 480px) {
      height: 33vh;
    }
  }

  .chapterListMobile {
    overflow-x: scroll;
  }
  table {
    border-collapse: separate;
  }

  td,
  th {
    text-align: center;

    border-radius: 0.2em;
  }

  th {
    background: #efb730;
    padding: 8px 1px;
    color: white;
  }

  td {
    padding: 1px 20px;
    background-color: rgba(221, 218, 218, 0.4);
  }

  .hideOnMobile {
    @media (max-width: 900px) {
      display: none;
    }
  }

  .showOnMobile {
    @media (min-width: 900px) {
      display: none;
    }
  }

  .difficultyLegend {
    text-align: left;
    padding: 2px;
    width: 300px;
    justify-content: space-evenly;
    display: flex;
    margin: auto;
  }
`;

export default DifficultyWise;
