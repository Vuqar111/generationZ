import React, { useState, useEffect } from "react";
import LineChart from "./components/Graphs/LineChart";
import Statistics from "./components/Graphs/Statistics";
import DoorSituation from "./components/Graphs/DoorSituation";
const FlowerData = () => {
  const [flowers, setFlowers] = useState([]);
  const [temperatures, setTempreatures] = useState([]);
  const [humidities, setHumidities] = useState([]);
  const [door, setDoor] = useState([]);
  temperatures[0] = ["Seconds", "Temperature"];
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch("http://10.33.120.174/general").then(
        (response) => response.json()
      );
      // update the state
      setFlowers(response);
    }
    const getApiTemperature = async () => {
      const response = await fetch("http://10.33.120.215/temperature").then(
        (response) => response.json()
      );
      // update the state
      setDoor(response);
    };

    getApiData();
    getApiTemperature()
  });

 

  // push temperature as multi dimensional array
  // const temperatureData = [];
  // {demoData.push((item) => {
  //   temperatureData.push([item.time, item.temperature]);
  // })}

  // get dynamic seconds
  let prevSecond = 0;
  const seconds = new Date().getSeconds();

  console.log(seconds);
  console.log(prevSecond);
  if (temperatures.length === 1) {
    temperatures.push([seconds, flowers.temp_air]);
  } else if (seconds !== temperatures[temperatures.length - 1][0]) {
    temperatures.push([seconds, flowers.temp_air]);
  }

  // if (humidities.length === 1) {
  //   humidities.push([seconds, flowers.hum_air]);
  // } else if (seconds !== humidities[humidities.length - 1][0]) {
  //   humidities.push([seconds, flowers.hum_air]);
  // }

  console.log(temperatures);
  console.log(door)
  // console.log(humidities);

  return (
    <div className=" m-[auto] lowerContainer">
      <h1 className="text-[40px] pl-[90px] pt-[20px]">
        Statistics of greenhouse
      </h1>
      <div className="text-center">
        {/* <div className="text-[24px] p-[10px]">
          Temperature: {flowers.temp_air}
        </div>
        <div className="text-[24px] p-[10px]">Humidity: {flowers.hum_air}</div> */}
        {/* <div className="text-[24px] p-[10px]">
          Humidity soil: {flowers.hum_soil}
        </div>
        <div className="text-[24px] p-[10px]">Light: {flowers.light}</div>
        <div className="text-[24px] p-[10px]">Rain: {flowers.rain}</div>
        <div>
          List of the all temperature:
          <div>{flowers.temp_air}</div>
        </div> */}
        <div>
          <Statistics flowers={flowers} />
          <LineChart temperatures={temperatures} />
          <DoorSituation  door={door}/>
        </div>
      </div>
    </div>  
  );
};

export default FlowerData;
