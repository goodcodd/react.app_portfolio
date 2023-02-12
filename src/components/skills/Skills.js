import React from 'react'

export default function Skills() {
    return (
        <main className="section">
            <div className='slills-container' id='skills'>
                <div className="container">
                    <h1 className="title-1">Skills</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, HTML, CSS, NPM, BootStrap</p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Else</h2>
                            <p>Python, C++, Figma, GoDot, Inskape, Photoshop</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}