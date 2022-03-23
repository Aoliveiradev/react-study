import * as React from 'react';
import './InformationCard.scss'
import {MdClass, MdSchool} from "react-icons/md";
import {GiRelationshipBounds} from "react-icons/gi";
import {AiFillExperiment} from "react-icons/ai";

function InformationCard() {
    return (
            <div className='divInf2'>
            <div className='divInformationCard'>
                {/*Degrees*/}
                <div className="courses-container">
                    <div className="course">
                        <div className="course-preview-degrees">
                            <MdSchool size={40} className="App-logo" />
                            <h2>Degrees Information</h2>
                        </div>
                        <div className="course-info">
                            <h7>Degrees : 10</h7>

                        </div>
                    </div>
                </div>
                {/*Class*/}
                <div className="courses-container">
                    <div className="course">
                        <div className="course-preview-class">
                            <MdClass size={40} className="App-logo" />
                            <h2>Class Information</h2>
                        </div>
                        <div className="course-info">
                            <h7>Class : 5</h7>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divInformationCard'>
                {/*RelationShips*/}
                <div className="courses-container">
                    <div className="course">
                        <div className="course-preview-relationships">
                            <GiRelationshipBounds size={40} className="App-logo" />
                            <h2>Relation Information</h2>
                        </div>
                        <div className="course-info">
                            <h7>Class Relationships : 8</h7>
                        </div>
                    </div>
                </div>
                {/*Matters*/}
                <div className="courses-container">
                    <div className="course">
                        <div className="course-preview-matters">
                            <AiFillExperiment size={40} className="App-logo" />
                            <h2>Matters Information</h2>
                        </div>
                        <div className="course-info">
                            <h7>Degrees Matters : 5</h7>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    )}

export default InformationCard;

