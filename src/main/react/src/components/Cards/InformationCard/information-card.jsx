import * as React from 'react';
import './information-card.scss'
import {MdClass, MdSchool} from "react-icons/md";
import { BsPersonCircle } from 'react-icons/bs';
import {useEffect, useState} from "react";

function InformationCard() {

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

    return (
            <div className='information-card-body'>
                <div className='information-card-container'>
                    {/*Students*/}
                    <div>
                        <div className="information-card-course">
                            <div className="course-preview-relationships">
                                <BsPersonCircle size={30} className="information-card-icon" />
                                <h2>Students Information</h2>
                            </div>
                            <div className="course-info">
                                <span>STUDENTS : {students.length}</span>
                            </div>
                        </div>
                    </div>
                    {/*Degrees*/}
                    <div>
                        <div className="information-card-course">
                            <div className="course-preview-degrees">
                                <MdSchool size={30} className="information-card-icon" />
                                <h2>Degrees Information</h2>
                            </div>
                                 <div className="course-info">
                                    <span >DEGREES: {degrees.length}</span>
                                </div>
                        </div>
                    </div>
                    {/*Class*/}
                    <div>
                        <div className="information-card-course">
                            <div className="course-preview-class">
                                <MdClass size={30} className="information-card-icon" />
                                <h2>Class Information</h2>
                            </div>
                            <div className="course-info">
                                <span>CLASSES: {classes.length}</span>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

    )}

export default InformationCard;

