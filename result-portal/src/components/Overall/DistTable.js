import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ClassContext } from "./Overall";
import { axiosInstance } from "../../lib/axiosAPI";

const DistTable = () => {
  const [marksDist, setMarksDist] = useState("");
  const standard = useContext(ClassContext);

  useEffect(async () => {
    try {
      const response = await axiosInstance.get("URL");
    } catch (error) {
      console.log("Error in getting marks distribution data");
    }
  }, [standard]);

  const marksDistTableData = {
    "0-5": "5%",
    "5-10": "5%",
    "10-15": "5%",
    "15-20": "5%",
    "20-25": "5%",
    "25-30": "5%",
    "30-35": "5%",
    "35-40": "5%",
  };

  const renderTable = (tableData) => {
    const arr = [];
    for (const element in tableData) {
      arr.push(
        <tr>
          <td>{element}</td>
          <td>{tableData[element]}</td>
        </tr>
      );
    }
    return arr;
  };

  return (
    <Styles>
      <div>
        <table>
          <tr>
            <th>Range</th>
            <th>Percentage of Students</th>
          </tr>
          {renderTable(marksDistTableData).map((element) => element)}
          {/* <tr>
            <td>0-5</td>
            <td>a</td>
          </tr>
          <tr>
            <td>5-10</td>
            <td>b</td>
          </tr>
          <tr>
            <td>10-15</td>
            <td>c</td>
          </tr>
          <tr>
            <td>15-20</td>
            <td>d</td>
          </tr>
          <tr>
            <td>20-25</td>
            <td>e</td>
          </tr>
          <tr>
            <td>25-30</td>
            <td>f</td>
          </tr>
          <tr>
            <td>30-35</td>
            <td>g</td>
          </tr>
          <tr>
            <td>35-40</td>
            <td>h</td>
          </tr> */}
        </table>
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  th {
    background-color: #efb730;
  }
  td,
  th {
    text-align: center;
    padding: 8px;
    border-radius: 2vw;
    border: 2.5px solid white;
  }
  th {
    font-weight: 700;
    color: white;
    padding: 0 15px;
  }
  tr {
    border-radius: 2vw;
  }

  tr:nth-child(even) {
    background-color: rgba(239, 183, 48, 0.3);
  }
  tr:nth-child(odd) {
    background-color: rgba(221, 218, 218, 0.5);
  }
  tr:nth-child(1) {
    background-color: white;
  }
  td:nth-child(odd) {
    padding: 8px 1vw;
  }
`;

export default DistTable;
