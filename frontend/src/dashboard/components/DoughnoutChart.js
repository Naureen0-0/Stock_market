import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return (
    <div className="doughnut-chart-wrap">
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: {
                boxWidth: 34,
                padding: 12,
              },
            },
          },
        }}
      />
    </div>
  );
}
