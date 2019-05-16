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
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'white'
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

