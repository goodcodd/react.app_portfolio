import React from 'react';
import Link from '../links/Link';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="naw-row">
            <h1 className="logo">
              <strong>Drinks </strong>
              restaurant
            </h1>

            <ul className="naw-list">
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
}
