import './App.scss';
import * as React from 'react';
import AcessibleTable from "./components/Table/AcessibleTable";
import ChartBar from "./components/Chart/ChartBar";
import CardText from "./components/Cards/TextCards/CardText";
import InformationCard from "./components/Cards/InformationCard/InformationCard";
import { SiOverleaf } from 'react-icons/si';
import { FiLogIn } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';
import ChartPie from "./components/Chart/ChartPie";
import SocialCards from "./components/Cards/SocialCards/SocialCards";

class App extends React.Component {
    render() {
        return (
            <div className="page-landing">
                {/*Toolbar*/}
                <header>
                    <div className='toolbar'>
                        {/*MenuItensBox*/}
                        <SiOverleaf className='leafIcon' size={40} color='#ffff'/>
                        <div className='menuButtonsBox'>
                            <a className='menuButtons' href="https://localhost:3000">HOME</a>
                            <a className='menuButtons' href="https://localhost:3000">DEGREE</a>
                            <a className='menuButtons' href="https://localhost:3000">CLASSES</a>
                            <a className='menuButtons' href="https://localhost:3000">MATTERS</a>
                        </div>
                        {/*LoginBox*/}
                        <div className='loginContent'>
                            <FiLogIn size={30}/>
                            <div className='loginBox'>
                                <a className='menuButtons' href="https://localhost:3000">Login</a>
                            </div>
                            <SiGnuprivacyguard size={28}/>
                            <div className='registerBox'>
                                <a className='menuButtons' href="https://localhost:3000">Register</a>
                            </div>
                        </div>
                    </div>
                </header>
                {/*Table*/}
                <div className='table'>
                    <AcessibleTable/>
                </div>
                {/*Information Card*/}
                <InformationCard/>
                <div className='pallets'>
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
                <footer>
                   
                    <SocialCards/>
                </footer>
            </div>
        );
    }
}

export default App;
