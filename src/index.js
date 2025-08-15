import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';

const performanceData = [
    { date: '2023-10-01', execution_time: 100, error_rate: 0.01 },
    { date: '2023-10-02', execution_time: 120, error_rate: 0.00 },
    { date: '2023-10-03', execution_time: 140, error_rate: 0.03 }
];

ReactDOM.render(
    <Dashboard performanceData={performanceData} />, 
    document.getElementById('root')
);