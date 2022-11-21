
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'

export default function BarList({chartData}){
    return(
        <>
            <Line data={chartData} />
        </>
    )
}