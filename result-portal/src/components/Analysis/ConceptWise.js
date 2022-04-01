import React, { useState, useEffect, useContext } from "react";
import ChapterWiseChart1 from "./ConceptWiseChart";
import ChapterWiseChart2 from "./ConceptWiseChart";
import styled from "styled-components";
import { ClassContext } from "./Analysis";
import { axiosInstance } from "../../lib/axiosAPI";

const ChapterWise = (props) => {
  const standard = useContext(ClassContext);

  const [noOfQuesData, setNoOfQuesData] = useState({
    1: 4,
    2: 9,
    3: 2,
    4: 4,
    5: 9,
    6: 2,
    7: 4,
    8: 9,
    9: 2,
    10: 4,
    11: 7,
    12: 8,
    13: 6,
    14: 1,
    15: 12,
  });
  const [noOfQuesCorrectData, setNoOfQuesCorrectData] = useState({
    1: 2,
    2: 8,
    3: 2,
    4: 3,
    5: 5,
    6: 2,
    7: 1,
    8: 4,
    9: 2,
    10: 2,
    11: 2,
    12: 7,
    13: 4,
    14: 1,
    15: 10,
  });

  //calculating percentage score in each chapter for chart 2
  const CalculateScorePercentage = (obj1, obj2) => {
    const percScoreInChapter = {};
    for (let element in obj1) {
      percScoreInChapter[element] = (
        (obj1[element] / obj2[element]) *
        100
      ).toFixed(0);
    }
    return percScoreInChapter;
  };

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("/school/results/");
      const classData = response.data[standard];
      const chaptersObject = classData.chapters_num_of_ques;

      //setting no of ques data
      let dummyobj1 = {};
      for (let element in chaptersObject) {
        dummyobj1[element] = chaptersObject[element].total_question;
      }
      setNoOfQuesData(dummyobj1);

      //setting no of correct questions data
      let dummyobj2 = {};
      for (let element in chaptersObject) {
        dummyobj2[element] = chaptersObject[element].averege;
      }
      setNoOfQuesCorrectData(dummyobj2);

      //
    } catch (error) {
      console.log("Error getting data in concept wise");
    }
  }, [standard]);

  return (
    <Styles>
      <div className="p-1 text-center">
        <div className="diffheading">No. of Questions from Each Chapter</div>
        <div className="chartContainer">
          <ChapterWiseChart1
            data={noOfQuesData}
            barcolor={"#efb730"}
            xtitle={"Chapter"}
            ytitle={"No of Questions"}
          />
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
        {/* <div className="chapterListWeb hideOnMobile">
          <table>
            {chapterListArray.map((element, index) => {
              return (
                <tr>
                  <th style={{ padding: "2px" }}>Chapter {index + 1}</th>
                  <td style={{ padding: "0", width: "150px" }}>{element}</td>
                </tr>
              );
            })}
          </table>
        </div> */}

        <div className="diffheading">
          Class Average Percentage in Each Chapter
        </div>
        <div className="chartContainer">
          <ChapterWiseChart2
            data={CalculateScorePercentage(noOfQuesCorrectData, noOfQuesData)}
            barcolor={"#efb730"}
            xtitle={"Chapter"}
            ytitle={"Percentage Score"}
          />
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
  .chartContainer {
    overflow-x: scroll;
    overflow-y: scroll;
    height: 40vh;

    @media (max-width: 920px) {
      height: 40vw;
    }
    @media (max-width: 480px) {
      height: 30vh;
    }
  }

  .chapterListMobile {
    overflow-x: scroll;
  }

  .chapterListWeb {
    position: absolute;
    right: -250px;
    top: 80px;
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

export default ChapterWise;
