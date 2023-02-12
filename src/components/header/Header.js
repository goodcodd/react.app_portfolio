import React from 'react'
import "./style.css";

export default function Header() {
    return (
        <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Nastya</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://iridescent-salamander-0fd834.netlify.app/" className="btn" target="_blank">My resume</a>
            </div>
        </div>
      </header>
    );
}