import * as React from 'react';
import './login-page.scss'
import {FaUser} from "@react-icons/all-files/fa/FaUser";
import {FaLock} from "@react-icons/all-files/fa/FaLock";
import {FaChevronRight} from "@react-icons/all-files/fa/FaChevronRight";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {Link} from "react-router-dom";


export default function LoginPage() {


    return (<div className='page-landing-login'>
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <FaUser size='20' color='#183fa2'/>
                            <input type="text" className="login__input" placeholder="User name / Email"/>
                        </div>
                        <div className="login__field">
                            <FaLock size='20' color='#183fa2'/>
                            <input type="password" className="login__input" placeholder="Password"/>
                        </div>
                        <Link to='/students'>
                        <button
                            className="button login__submit">
                            <span className="button__text">Login</span>
                            <FaChevronRight className='button__icon'/>
                        </button>
                        </Link>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <FaFacebook className='social-icons' size={20}/>
                            <FaTwitter className='social-icons' size={20}/>
                            <FaLinkedin className='social-icons' size={20}/>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>

            </div>
        </div>


    )
}
