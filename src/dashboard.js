import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = ({ performanceData }) => {
    const data = {
        labels: performanceData.map(entry => entry.date),
        datasets: [
            {
                label: '执行时间 (ms)',
                data: performanceData.map(entry => entry.execution_time),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: '错误率 (%)',
                data: performanceData.map(entry => entry.error_rate * 100),
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            }
        ]
    };

    return <Line data={data} />;
};

export default Dashboard;