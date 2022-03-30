import React, { useState } from "react";
import styled from "styled-components";
import BarChart from "./ResponsesBarChart";
import CoustomSelect from "../CoustomSelect";

const Responses = () => {
  const [selectedClass, setSelectedClass] = useState(1);
  const handleClassChange = (s) => {
    setSelectedClass(s.value);
  };

  const data = [
    //to get desired results store all data in data array, which is an array of objects
    {
      number: 1,
      questionText:
        "What is the prime factorization of a,a,a,What is the prime factorization of a,a,a,What is the prime factorization of a,a,a,What is the prime factorization of a,a,a",
      diffLevel: "Hard",
      no_correct: 9,
      no_sillyMistake: 18, //number of students who made sillymistakes
      no_misconception: 6,
      no_notAttempted: 8,
      optionA: "aaaaaaaaaaaaaaaaaaaa",
      optionB: "bbbbbbbbbbbbbbbbbbbb",
      optionC: "cccccccccccccccccccc",
      optionD: "dddddddddddddddddddd",
      option_correct: "a",
      option_misconception: ["b", "c"],
      option_sillymistake: ["d"],
    },
    {
      number: 2,
      questionText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus aut aperiam quam? Exercitationem in voluptas possimus excepturi qui ab quaerat provident ducimus vero itaque sint ad, obcaecati quae mollitia",
      diffLevel: "Medium",
      no_correct: 8,
      no_sillyMistake: 12, //number of students who made sillymistakes
      no_misconception: 7,
      no_notAttempted: 5,
      optionA: "aaaaaaaaaaaaaaaaaaaa",
      optionB: "bbbbbbbbbbbbbbbbbbbb",
      optionC: "cccccccccccccccccccc",
      optionD: "dddddddddddddddddddd",
      option_correct: "c",
      option_misconception: ["a", "d"],
      option_sillymistake: ["b"],
    },
  ];

  return (
    <Styles>
      <div className="top-container">
        <div className="heading">
          Analysis of Student Responses for {selectedClass}
        </div>
        <div className="selectContainer">
          <CoustomSelect onClassChange={handleClassChange} />
        </div>
      </div>

      {data.map((question) => {
        return (
          <div className="question-analysis">
            <div className="question-top">
              <div className="textBold question-numer">
                Question {question.number}:
              </div>
              <div className="question-text">{question.questionText}</div>
            </div>

            <div className="container">
              {/* --------------------------------------------------------------- */}
              <div className="question-left">
                {/* <div className="textBold">Error Rate:</div> */}
                {/* <div style={{ color: "#f12222" }} className="textBold">
                  {question.errorRate}
                </div> */}
                <div className="textBold">Difficulty Level:&nbsp;</div>
                <div
                  style={{
                    // Here the color is decided based on difficulty using, color = (condition)?"color1":"color2"
                    color: `${
                      question.diffLevel.toLowerCase() === "hard"
                        ? "#f12222"
                        : question.diffLevel.toLowerCase() === "easy"
                        ? "#06dc5c"
                        : "#fda50f"
                    }`,
                  }}
                  className="textBold"
                >
                  {question.diffLevel}
                </div>
              </div>
              {/* -------------------------------------------------------------- */}
              <div className="question-right">
                <div className="options">
                  <div className="optionContainer">
                    <div
                      className={`option ${
                        question.option_correct.toLowerCase() === "a"
                          ? "c"
                          : " "
                      } ${
                        question.option_misconception.includes("a") ? "m" : " "
                      }
                ${question.option_sillymistake.includes("a") ? "s" : " "}`}
                    >
                      A
                    </div>
                    <div className="optionText">{question.optionA}</div>
                  </div>

                  <div className="optionContainer">
                    <div
                      className={`option ${
                        question.option_correct.toLowerCase() === "b"
                          ? "c"
                          : " "
                      } ${
                        question.option_misconception.includes("b") ? "m" : " "
                      }
                ${question.option_sillymistake.includes("b") ? "s" : " "}`}
                    >
                      B
                    </div>
                    <div className="optionText">{question.optionB}</div>
                  </div>
                  <div className="optionContainer">
                    <div
                      className={`option ${
                        question.option_correct.toLowerCase() === "c"
                          ? "c"
                          : " "
                      } ${
                        question.option_misconception.includes("c") ? "m" : " "
                      }
                ${question.option_sillymistake.includes("c") ? "s" : " "}`}
                    >
                      C
                    </div>
                    <div className="optionText">{question.optionC}</div>
                  </div>
                  <div className="optionContainer">
                    <div
                      className={`option ${
                        question.option_correct.toLowerCase() === "d"
                          ? "c"
                          : " "
                      } ${
                        question.option_misconception.includes("d") ? "m" : " "
                      }
                ${question.option_sillymistake.includes("d") ? "s" : " "}`}
                    >
                      D
                    </div>
                    <div className="optionText">{question.optionD}</div>
                  </div>
                </div>
                <div className="chart-container">
                  <BarChart
                    data={{
                      Correct: question.no_correct,
                      "Silly Mistakes": question.no_sillyMistake,
                      Misconceptions: question.no_misconception,
                      "Not Attempted": question.no_notAttempted,
                    }}
                    color={["#06dc5c", "#efd630", "#f1480b", "#0080ff"]}
                    ytitle="No of Students"
                  />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
          </div>
        );
      })}
    </Styles>
  );
};

const Styles = styled.div`
  margin: 0 3vw;
  margin-top: 80px;
  @media (max-width: 480px) {
    margin-top: 50px;
  }

  .top-container {
    display: flex;
    align-items: center;
    color: #686868;
    margin-top: 90px;
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
  .heading {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    @media (max-width: 900px) {
      text-align: center;
      font-size: 32px;
    }
    @media (max-width: 480px) {
      text-align: center;
      font-size: 28px;
    }
  }

  .question-analysis {
    border: 1px solid grey;
    border-radius: 1em;
    padding: 1em;
    margin: 1em 0;
  }
  .question-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .question-number {
    width: 20%;
    @media (max-width: 480px) {
      width: 20%;
      margin: auto;
    }
  }
  .question-text {
    width: 80%;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .question-left {
    display: flex;
    flex-direction: column;
    width: 20%;
    @media (max-width: 480px) {
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
  }
  .question-right {
    width: 80%;
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .options {
    margin: 1em 0;
  }
  .optionContainer {
    display: flex;
    flex-wrap: wrap;
  }

  .optionText {
  }

  // .option {
  //   padding: 1em;
  //   border: 1px solid black;
  //   border-radius: 2em;
  //   margin-bottom: 1em;
  //   margin-right: 1em;
  //   text-align: center;
  //   max-height: 80px;
  //   @media (max-width: 480px) {
  //     width: 25%;
  //     padding: 0.5em;
  //     margin: 0.2em;
  //   }
  // }

  .option {
    border-radius: 50%;
    padding: 0px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .c {
    //for correct option
    border: 2px solid rgb(84, 255, 0);
    background-color: rgba(84, 255, 0, 0.2);
  }
  .m {
    //for misconception
    border: 2px solid rgb(255, 0, 0);
    background-color: rgba(255, 0, 0, 0.2);
  }
  .s {
    //for silly mistake
    border: 2px solid rgb(239, 183, 48);
    background-color: rgba(239, 183, 48, 0.2);
  }

  .textBold {
    font-weight: 700;
  }

  .container {
    display: flex;
    margin: 0;
    margin-top: 10px;
    padding: 0;
    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  .chart-container {
    overflow-x: scroll;
  }
`;

export default Responses;
