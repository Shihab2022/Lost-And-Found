import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ApexChartProps {}

export const PieChart: React.FC<ApexChartProps> = () => {
  const [series, setSeries] = useState<number[]>([44, 55, 41]);

  const [options, setOptions] = useState<any>({
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: ["Lost Item ", "Found Item", "User "],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    title: {
      text: "Report ",
    },
    dataLabels: {
      formatter(val: number, opts: any) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    legend: {
      show: false,
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          height={350}
          width="100%"
          options={options}
          series={series}
          type="pie"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
