import './edit-students-page.scss';
import * as React from 'react';
import NaviBar from "../../../components/NaviBar/navi-bar";
import {GiNotebook} from "react-icons/gi";
import {MdClass, MdSchool} from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs";
import {BiLeftArrowAlt} from "react-icons/bi";
import TextField from '@material-ui/core/TextField';
import {useLocation, useParams} from "react-router-dom";
import {useState} from "react";


export default function EditStudents() {

    const { state }  = useLocation();
    const [nameAluno, setNameAluno] = useState(state.student.name);
    const [serieAluno, setSerieAluno] = useState(state.student.degree.name)
    const [clazzAluno, setClazzAluno] = useState(state.student.clazz.name)

    return(

        <div className="edit-students-page">

            <header>
            {/*Toolbar*/}
            <div className='edit-students-page-toolbarEdit'>
                <NaviBar/>
            </div>
            </header>
            {/*BackButton*/}
            <a href='/students' className="iconBack">
            <BiLeftArrowAlt  href='/students' size={70} />
            </a>
            {/*EditCard*/}
            <div className='edit-students-page-card'>
                <div className="container">
                    <div className="box">

                            <h1>Registro do Aluno</h1>
                            <div>
                                <BsPersonCircle size={40} className="edit-students-page-icon" />
                                <TextField
                                    value={state.student.id}
                                    autoComplete="off"
                                    id="standard-basic"
                                    disabled
                                />
                            </div>

                            <h1>Nome do Aluno</h1>
                            <div>
                                <GiNotebook size={40} className="edit-students-page-icon" />
                                <TextField
                                    onChange={(e) => {
                                        setNameAluno(e.target.value);
                                    }}
                                    value={nameAluno}
                                    autoComplete="off"
                                    id="standard-basic"
                                />
                            </div>

                            <h1>Série do Aluno</h1>
                            <div>
                                <MdSchool size={40} className="edit-students-page-icon" />
                                <TextField
                                    onChange={(e) => {
                                        setSerieAluno(e.target.value)
                                    }}
                                    value={serieAluno}
                                    autoComplete="off"
                                    id="standard-basic"
                                />
                            </div>

                            <h1>Classe do Aluno</h1>
                            <div>
                                <MdClass size={40} className="edit-students-page-icon" />
                                <TextField
                                    onChange={(e)=>{
                                        setClazzAluno(e.target.value)
                                    }}
                                    value={clazzAluno}
                                    autoComplete="off"
                                    id="standard-basic"
                                />
                            </div>


                    </div>
                </div>
                {/*ButtonSubmit*/}
                <div>
                  <button className="button" role="button">Submit</button>
                </div>
            </div>
        </div>

    )
}
