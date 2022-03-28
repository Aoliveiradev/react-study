import React, {useEffect, useState} from 'react';
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

ChartJS.register (
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
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/api/students')
            .then(response => response.json())
            .then(json => {
                setStudents(json.students);
            });
    }, []);

//<--------- ARRAYS ---------> //
    const degrees = [];
    const classes = [];
//<------ DEGREES ARRAY ------>//
    let contadorDegrees = 0;
    while (contadorDegrees < students.length) {
        const degree = students[contadorDegrees].degree;

        const resultDegrees = degrees.find((d) => {
            return degree.id === d.id;
        }, degree);

        if (resultDegrees === undefined) {
            degrees.push(degree);
        }

        contadorDegrees = contadorDegrees + 1;

    }
//<------ CLASSES ARRAY ------>//
    let contadorClasses = 0;
    while (contadorClasses < students.length) {
        const clazz = students[contadorClasses].clazz;

        const resultClasses = classes.find((c) => {
            return clazz.name === c.name;
        }, clazz);

        if (resultClasses === undefined) {
            classes.push(clazz);
        }
        contadorClasses = contadorClasses + 1;
    }
// <--------- VARIABLES ------->

    const data1 = {

        options: {options},
        labels: ['Students'],
        datasets: [
            {
                label: ['Students'],
                data: [students.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.5)',
                ],
            },
            {
                label: ['Degrees'],
                data: [degrees.length],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 0.5)',
                ],
            },
            {
                label: ['Class'],
                data: [classes.length],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 0.5)',
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