import React from 'react';
import Link from '../links/Link';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="naw-row">
            <h1 className="logo">
              <strong>Freelancer </strong>
              portfolio
            </h1>

            <ul className="naw-list">
              <li className="naw-list__item">
                <Link
                  href="src/components/navbar#home"
                  className="naw-list__link--active"
                  text="Projects"
                />
              </li>
              <li className="naw-list__item">
                <Link
                  href="src/components/navbar#skills"
                  className="naw-list__link"
                  text="Skills"
                />
              </li>
              <li className="naw-list__item">
                <Link
                  href="src/components/navbar#contacts"
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
