import './App.scss';
import * as React from 'react';
import AcessibleTable from "./components/Table/acessible-table";
import ChartBar from "./components/Chart/chart-bar";
import CardText from "./components/Cards/TextCards/card-text";
import InformationCard from "./components/Cards/InformationCard/information-card";
import { FiLogIn } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';
import ChartPie from "./components/Chart/chart-pie";
import SocialCard from "./components/Cards/Footer/SocialCards/social-card";
import NaviBar from "./components/NaviBar/navi-bar";
import FooterInformationCard from "./components/Cards/Footer/footer-information-card/footer-information-card";


export default function App() {

    return (
        <div className="page-landing">
            {/*Toolbar*/}
            <header>
                <div className='toolbar'>
                    <NaviBar/>
                    <div className='loginContent'>
                        <FiLogIn size={30}/>
                        <div className='loginBox'>
                            <a href="https://localhost:3000">Login</a>
                        </div>
                        <SiGnuprivacyguard size={28}/>
                        <div className='registerBox'>
                            <a href="https://localhost:3000">Register</a>
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
                     <SocialCard/>
                     <FooterInformationCard/>
            </footer>
        </div>
    );
}
