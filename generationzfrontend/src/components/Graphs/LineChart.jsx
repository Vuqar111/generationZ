import React, { useState } from "react";
import { UserData } from "../../utils/data";
import { Chart } from "react-google-charts";

function LineChart({temperatures}) {


  console.log(temperatures)

  const data = [
    ["Year", "Sales"],
    ["2014", 1000],
    ["2015", 1170],
    ["2016", 660],  
    ["2017", 1030],
  ];

  const options = {
    chart: {
      seconds: "Time",
      temperature: "Temperature, °C",
    },
  };

  return (
    <div className="w-[90%] m-[auto]">
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={temperatures}
        options={options}
      />
    </div>
  );
}

export default LineChart;
