import React from 'react'
import "./style.css";

import github from "./../../img/icons/github.png";
import instagram from "./../../img/icons/instagram.png";
import diskord from "./../../img/icons/diskord.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://github.com/goodcodd?tab=repositories" 
                            target="_blank" rel="noreferrer">
                                <img src={github} alt="link" />
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="https://www.instagram.com/nastasya0.05/"
                               target="_blank"
                               rel="noreferrer">
                                <img src={instagram} alt="link" />
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="https://discord.com/channels/534496884849639455/637273705579413533"
                               target="_blank" rel="noreferrer">
                                <img src={diskord} alt="link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Lytvyn Anastasya</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}