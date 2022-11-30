
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChaerJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import React from 'react';
ChaerJS.register( Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler );

export const ChartLine = ({ datas, labels, height }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Data',
                data: datas,
                datasetStrokeWidth : 3,
                pointDotStrokeWidth : 4,
                backgroundColor: '#0BA5EC',
                borderColor: '#0BA5EC',
                tension: 0.5,
                pointRadius: 2,
                borderWidth: 1,
                fill: {
                    target: "origin",
                    above: "rgba(255, 0, 0, 0.1)"
                }
            }
        ]
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // scales: {y: {min: 0, max: 10, stepSize: 0}},
        plugins: {
            legend: {
              display: false
            }
        },
    };

    return(
        <>
            <Line data={data} options={options} height={height} />
        </>
    )
}