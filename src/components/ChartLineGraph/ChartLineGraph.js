import React from 'react';
import { Line as LineChart } from 'react-chartjs-2';

const ChartLineGraph = ({
    title,
    chartLabels,
    chartData
}) => {
    const data = {
        labels: chartLabels,
        datasets: [{
            label: title,
            data: chartData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 3
        }]
    }
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    return (
        <LineChart data={ data } options={ options } />   
    )
}

export default ChartLineGraph;

