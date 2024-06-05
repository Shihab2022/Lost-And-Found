import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

export const DonutChart: React.FC<ApexChartProps> = () => {
  const [series, setSeries] = useState<number[]>([44, 55, 41]);
  const [options, setOptions] = useState<any>({
    chart: {
      type: "donut",
    },
    labels: ["Lost Item ", "Found Item", "User "],
    title: {
      text: "Report ",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          height={350}
          width="100%"
          options={options}
          series={series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
