import './App.scss';
import * as React from 'react';
import AcessibleTable from "./components/Table/AcessibleTable";
import ChartBar from "./components/Chart/ChartBar";
import CardText from "./components/Cards/TextCards/CardText";
import InformationCard from "./components/Cards/InformationCard/InformationCard";
import {MdClass} from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs";
import ChartPie from "./components/Chart/ChartPie";



class App extends React.Component {

    render() {

        return (
            <div className="page-landing">

                <header>
                    {/*Toolbar*/}
                    <div className='toolbar'>
                        {/*Cards*/}
                        <div className='card-container'>
                            {/*Student-card*/}
                            <a className="card">
                                <BsPersonCircle size={20} className="App-logo" />
                                <span>Students</span>
                            </a>
                            {/*degrees-card*/}
                            <a className="card">
                                <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" width="24"
                                     height="24"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                                </svg>
                                <span>Degrees</span>
                            </a>
                            {/*class-card*/}
                            <a className="card">
                                <MdClass size={20} className="App-logo" />
                                <span>Classes</span>
                            </a>
                        </div>
                    </div>
                </header>


                {/*Information Card*/}
                <InformationCard/>
                <div className='pallets'>
                    {/*Table*/}
                    <div className='table'>
                        <AcessibleTable/>
                    </div>
                    {/*ChartBar*/}
                    <div className='chartDiv'>
                        <ChartBar/>
                    </div>
                    <div className='chartDiv'>
                        <ChartPie/>
                    </div>
                </div>
                {/*Professors Card*/}
                <div className='cardsText'>
                     <CardText/>
                 </div>
                {/*<footer>*/}
                {/*    <SocialCards/>*/}
                {/*</footer>*/}
            </div>


        );
    }

}

export default App;
