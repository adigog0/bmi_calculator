import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = (props) => {
  return (
    <Bar
      data={props.userData}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
