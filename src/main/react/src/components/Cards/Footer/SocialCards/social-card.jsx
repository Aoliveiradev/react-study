import * as React from 'react';
import './social-card.scss'


function SocialCard() {
    return (

    <div>
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



    </div>
)}

export default SocialCard;






