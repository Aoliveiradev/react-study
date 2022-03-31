import * as React from 'react';
import './login-page.scss'
import anime from 'animejs';

let current = null;

export default function LoginPage() {
    const onEmailFocus = function () {
        if (current) current.pause();

        current = anime({
            targets: 'path', strokeDashoffset: {
                value: 0, duration: 700, easing: 'easeOutQuart'
            }, strokeDasharray: {
                value: '240 1386', duration: 700, easing: 'easeOutQuart'
            }
        });
    };

    const onPasswordFocus = function () {
        if (current) current.pause();
        current = anime({
            targets: 'path', strokeDashoffset: {
                value: -336, duration: 700, easing: 'easeOutQuart'
            }, strokeDasharray: {
                value: '240 1386', duration: 700, easing: 'easeOutQuart'
            }
        });
    };

    const onSubmitFocus = function () {
        if (current) current.pause();
        current = anime({
            targets: 'path', strokeDashoffset: {
                value: -730, duration: 700, easing: 'easeOutQuart'
            }, strokeDasharray: {
                value: '530 1386', duration: 700, easing: 'easeOutQuart'
            }
        });
    };

    return (
        <div className='login-body'>

        <div className="page">
            <div className="container">
                <div className="left">
                    <div className="login">Login</div>
                    <div className="eula">Ao fazer login, você concorda com os termos de serviço
                    </div>
                </div>
                <div className="right">
                    <svg viewBox="0 0 320 300">
                        <defs>
                            <linearGradient
                                {...{"inkscape:collect": "always"}}
                                id="linearGradient"
                                x1="13"
                                y1="193.49992"
                                x2="307"
                                y2="193.49992"
                                gradientUnits="userSpaceOnUse">
                                <stop
                                    style={{stopColor: '#0cc33d'}}
                                    offset="0"
                                    id="stop876"/>
                                <stop
                                    style={{stopColor: '#00099a'}}
                                    offset="1"
                                    id="stop878"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="
                                       m 40 120.0002 l 239.9998 -0.0003
                                       c 0 0 24.9926 0.7993 25.0002 35.0002
                                       c 0.008 34.2008 -25.0002 35 -25.0002 35
                                       h -239.9998
                                       c 0 -0 -25 4.0135 -25 24
                                       c 0 20 25 25.5 25 25
                                       h 215
                                       c 0 0 20 -0.996 20 -25
                                       c 0 -24.004 -20 -25 -20 -25
                                       h -190
                                       c 0 0 -20 1.7103 -20 25
                                       c 0 24 20 25 20 25
                                       h 168.5714
                                    "/>

                        </svg>
                    <div className="form">
                        <label htmlFor="email">Email</label>
                        <input
                            autoComplete='off'
                            type="email"
                            id="email"
                            onFocus={onEmailFocus}
                        />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onFocus={onPasswordFocus}/>
                        <input type="submit" id="submit" value="Submit" onFocus={onSubmitFocus}/>
                    </div>
                </div>
            </div>
        </div>
        </div>

            )
}
