import React, { useContext } from 'react';
import Link from '../links/Link';
import Button from "../buttons/Button";
import LightDarkContext from '../context/LightDarkContext';

export default function Navbar(props) {
    const { changeTemplate } = props;
    const myTemplate = useContext(LightDarkContext);

    return (
        <nav className={myTemplate === 'light' ? 'nav light' : 'nav dark'}>
            <div className="container">
                <div className="naw-row">
                    <h1 className="logo">
                        <strong>Drinks </strong>
                        restaurant
                    </h1>

                    <ul className="naw-list">
                        <li className="naw-list__item">
                            <Button
                                onClick={changeTemplate}
                                text={myTemplate === 'light' ? 'DAY' : 'NIGHT'}
                                className={myTemplate}
                            />
                        </li>
                        <li className="naw-list__item">
                            <Link
                                href="#projects"
                                className="naw-list__link--active"
                                text="Photos"
                            />
                        </li>
                        <li className="naw-list__item">
                            <Link
                                href="#skills"
                                className="naw-list__link"
                                text="Inform"
                            />
                        </li>
                        <li className="naw-list__item">
                            <Link
                                href="#contacts"
                                className="naw-list__link"
                                text="Contacts"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}