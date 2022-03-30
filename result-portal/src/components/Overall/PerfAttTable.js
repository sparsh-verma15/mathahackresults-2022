import React, { useState } from "react";
import styled from "styled-components";

const PerfAttTable = () => {
  const [tableTada, setTableData] = useState({
    Highest: 40,
    Lowest: 10,
    Mean: 32,
    Median: 28,
    StandardDeviation: 12,
  });

  return (
    <Styles>
      <div className="perfheading">Performance Attributes</div>
      <div className="tableContainer">
        <div className="hideOnMobile">
          <table>
            <tr>
              <th>Highest Marks</th>
              <th>Lowest Marks</th>
              <th>Mean</th>
              <th>Median</th>
              <th>Standard Deviation</th>
            </tr>
            <tr>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>
            </tr>
          </table>
        </div>
        <div className="showOnMobile">
          <table>
            <tr>
              <tr>
                <th>Highest Marks</th>
                <td>{tableTada.Highest}</td>
              </tr>
              <tr>
                <th>Lowest Marks</th>
                <td>{tableTada.Lowest}</td>
              </tr>
              <tr>
                <th>Mean</th>
                <td>{tableTada.Mean}</td>
              </tr>
              <tr>
                <th>Median</th>
                <td>{tableTada.Median}</td>
              </tr>
              <tr>
                <th>Standard Deviation</th>
                <td>{tableTada.StandardDeviation}</td>
              </tr>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>

      <div className="bottomtext">&nbsp;</div>
    </Styles>
  );
};

const Styles = styled.div`
  .perfheading {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    color: #686868;
    @media (max-width: 900px) {
      margin: 5vw 0vw 2vw 0;
    }
    @media (max-width: 480px) {
      margin: 7vw 0vw 2vw 0;
    }
  }
  .tableContainer {
    @media (max-width: 900px) {
      width: 80vw;
      margin: auto;
      overflow-x: scroll;
    }
    @media (max-width: 480px) {
      width: 95vw;
      margin: auto;
      overflow-x: scroll;
    }
  }

  td,
  th {
    text-align: center;

    border-radius: 2vw;
    border: 2.5px solid white;
  }
  td {
    background-color: rgba(221, 218, 218, 0.5);
    padding: 0.5vw 4vw;
  }
  th {
    background-color: #efb730;
    font-weight: 700;
    color: white;
    padding: 0.5vw 2vw;
  }
  tr {
    border-radius: 2vw;
  }

  .bottomtext {
    margin: 1vw;
    @media (max-width: 480px) {
      margin: 3vw;
    }
  }

  .showOnMobile {
    margin: auto;
    width: 50%;
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

export default PerfAttTable;
