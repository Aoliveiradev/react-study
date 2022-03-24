import * as React from 'react';
import './SocialCard.scss'
import {Helmet} from "react-helmet";


function SocialCards() {
    return (

    <html>
        {/*Links // Refs*/}
        <Helmet>
        <meta charSet="utf-8" />
        <title>APP STUDY</title>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossOrigin="anonymous"
        />
        </Helmet>

        <div className="containerSocialCard">
            {/*LinkedinSocial*/}
            <div className="SocialCard">
                <div className="face face1">
                    <div className="contentSocial">
                        <div className="iconSocialCard">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contentSocial">
                        <h3>
                            <a href="https://www.linkedin.com/in/allan-oliveira-928385131/" target="_blank">_allan-oliveira</a>
                        </h3>
                        <p>This is where I network and build my professional protfolio.</p>
                    </div>
                </div>
            </div>
            {/*Twitter*/}
            <div className="SocialCard">
                <div className="face face1">
                    <div className="contentSocial">
                        <div className="iconSocialCard">
                            <i className="fa fa-twitter-square" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contentSocial">
                        <h3>
                            <a href="https://twitter.com/Lokizinrj" target="_blank">@Lokizinrj</a>
                        </h3>
                        <p>This is where I network and build my professional protfolio.</p>
                    </div>
                </div>
            </div>
            {/*Github*/}
            <div className="SocialCard">
                <div className="face face1">
                    <div className="contentSocial">
                        <div className="iconSocialCard">
                            <i className="fa fa-github-square" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contentSocial">
                        <h3>
                            <a href="https://github.com/Aoliveiradev" target="@Aoliveiradev">Aoliveiradev</a>
                        </h3>
                        <p>This is where I share code and work on projects.</p>
                    </div>
                </div>
            </div>
        </div>



    </html>
)}

export default SocialCards;






