import React from 'react'
import "./style.css";
export default function Navbar() {
  return (
    <nav className="nav">
        <div className="container">
            <div className="naw-row">
                <a href="./index.html" className="logo" target="_blank" rel="noreferrer"><strong>Freelancer </strong>portfolio</a>
                <ul className="naw-list">
                    <li className="naw-list__item"><a href="#home" className="naw-list__link--active">Projects</a></li>
                    <li className="naw-list__item"><a href="#skills" className="naw-list__link">Skills</a></li>
                    <li className="naw-list__item"><a href="#contacts" className="naw-list__link">Contacts</a></li>
                </ul>
            </div>
        </div>
      </nav>
  )
}
