import React, { useEffect } from "react";
import Chart from "./Chart";

const UserChart = (props) => {
  return <Chart dataPoints={props.initData} />;
};

export default UserChart;
