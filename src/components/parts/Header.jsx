import React from 'react';
import Link from '../links/Link';
import LightDarkContext from '../context/LightDarkContext';

export default function Header() {
    return (
        <LightDarkContext.Consumer>
            {(myTemplate) => (
                <header className={myTemplate === 'light' ? 'header light' : 'header dark'}>
                    <div className="container">
                        <div className="header__wrapper">
                            <h1 className="header__title">
                                <strong>
                                    Become a
                                    <em> Tastemaker </em>
                                </strong>
                                <br />
                                With These Favorites
                            </h1>
                            <div className="header__text">
                                <p>only the best for you.</p>
                            </div>

                            <Link
                                href="https://iridescent-salamander-0fd834.netlify.app/"
                                className="btn"
                                target="_blank"
                                rel="noreferrer"
                                text="My resume"
                            />
                        </div>
                    </div>
                </header>
            )}
        </LightDarkContext.Consumer>
    );
}