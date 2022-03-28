import React, { useState, useEffect } from "react";
import "./data-students.scss";
import axios from "axios";

const Students = "/api/students";

export default function DataStudents() {
    const [students, setStudents] = useState([]);


    useEffect(() => {
        getStudentsWithAxios();
    }, []);

    const getStudentsWithAxios = async () => {
        const response = await axios.get(Students);
         setStudents(response.data.students);
    };



    return (
        <div className="App">
            <header className="App-header">
                <h2>Students Data</h2>
            </header>
            <div className="user-container">

                <h5 className="info-item">{
                    (students.length !== 0) &&
                        students[1].degree.name + ' ' +  students[1].clazz.name
                }</h5>




            </div>
        </div>
    );
}



















// { students.map((student) => { return <div><p>{student.id}</p></div>;})}