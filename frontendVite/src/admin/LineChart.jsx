import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
);


const LineChart = () => {
    const [tableData, setTableData] = useState([]);
    const [label, setLabel] = useState([]);
    const data = {
        labels: label,
        datasets: [
            {
                label: 'Websiteaufrufe Heute',
                data: tableData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        mainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Websiteaufrufe'
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const reqVisits = async () =>{
            const res = await fetch('/api/kpi/getVisits', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Content': 'application/json',
                'Authorization': `Bearer ${token}`
            }})
            const result = await res.json();
            console.log(result);
            console.log(result.data);
            console.log(result.labels);
            setLabel(result.labels);
            setTableData(result.data);
        }
        reqVisits();
    }, [])

    return (
        <div
            style={{
                width: '25vw',
                height: '25vh',
                border: '1px solid lightgray'
            }}
        >
        <Line data={data} options={options} />;
        </div>
    )
}

export default LineChart;