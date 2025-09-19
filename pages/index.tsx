"use client";

import { LineChart, PieChart } from "react-shadcn-charts";
import "react-shadcn-charts/dist/index.css";
import { lineChartData, pieChartData } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800">Chart Demo</h1>
      <section className="flex flex-row gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
          <LineChart
            data={lineChartData}
            xKey="month"
            lineKey="visitors"
            className="w-96 h-96 p-4 bg-white rounded-lg shadow-md"
            type="linear"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
          <PieChart
            data={pieChartData}
            className="w-96 h-96 p-4 bg-white rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
