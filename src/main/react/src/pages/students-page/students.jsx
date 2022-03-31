import './students.scss';
import * as React from 'react';
import AcessibleTable from "../../components/Tables/students-table/students-table";
import ChartBar from "../../components/Chart/chart-bar";
import CardText from "../../components/Cards/TextCards/card-text";
import InformationCard from "../../components/Cards/InformationCard/information-card";
import ChartPie from "../../components/Chart/chart-pie";
import SocialCard from "../../components/Cards/Footer/SocialCards/social-card";
import NaviBar from "../../components/NaviBar/navi-bar";
import FooterInformationCard from "../../components/Cards/Footer/footer-information-card/footer-information-card";


export default function Students() {

    return (
        <div className="page-landing">
            {/*Toolbar*/}
            <NaviBar/>
            {/*Tables*/}
            <div className='table'>
                <AcessibleTable/>
            </div>
            {/*Information Card*/}
            <InformationCard/>
            <div className='students-chart-cards-information'>
                {/*ChartBar*/}
                <div className='students-chart-Bar'>
                    <ChartBar/>
                </div>
                <div className='students-chart-Pie'>
                    <ChartPie/>
                </div>
            </div>
            {/*Professors Card*/}
            <div className='cardsText'>
                 <CardText/>
             </div>
            <div className='students-footer'>
                     <SocialCard/>
                     <FooterInformationCard/>
            </div>
        </div>
    );
}
