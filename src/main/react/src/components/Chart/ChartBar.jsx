import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    ArcElement,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale
);
const options = {
    scales: {
        xAxes: [{
            ticks: {
                fontFamily: 'FontAwesome'
            }
        }]
    }
}


const ChartBar = () => {
    const data1 = {

        options: {options},
        labels: ["\uf8f5", "\uf8f5", "\uf8f5", "\uf8f5", "\uf8f5"],
        datasets: [
            {
                label: ["Students"],
                data: [10, 5, 8, 6, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',

                ],
            },
        ],

}

return (
    <div>
        <Bar
            data={data1}
            height={400}
            width={600}
        />
    </div>


);

}
export default ChartBar;