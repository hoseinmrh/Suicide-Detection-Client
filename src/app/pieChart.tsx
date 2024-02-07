"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS,ArcElement, Legend, Tooltip} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
interface IPieChartProps {
    suicidal_rate: number
    non_suicidal_rate: number
}
const PieChart = ({suicidal_rate,non_suicidal_rate }: IPieChartProps) => {
    const data = {
        labels: ['Suicidal', 'Non Suicidal'],
        datasets: [
            {
                label: '# rate',
                data: [suicidal_rate, non_suicidal_rate],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.2)',
                    'rgba(22, 163, 74, 0.2)',
                ],
                borderColor: [
                    'rgba(239, 68, 68, 1)',
                    'rgba(22, 163, 74, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="my-16 flex justify-center items-center py-2 h-80 ">
            <Pie data={data} className={"my-5"} />
        </div>

    );
};

export default PieChart;