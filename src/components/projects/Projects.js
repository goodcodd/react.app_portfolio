import React from 'react'
import "./style.css";
import img1 from "./../../img/projects/01.jpg";
import img2 from "./../../img/projects/02.jpg";
import img3 from "./../../img/projects/03.jpg";
import img4 from "./../../img/projects/04.jpg";
import img5 from "./../../img/projects/05.jpg";
import img6 from "./../../img/projects/06.jpg";

export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <img src={img1} alt="Project img" className="project__img" />
                        <h3 className="project__title">Global Game Jam 2023</h3>
                    </li>

                    <li className="project">
                        <img src={img2} alt="Project img" className="project__img" />
                        <h3 className="project__title">First html/css project</h3>
                    </li>

                    <li className="project">
                        <img src={img3} alt="Project img" className="project__img" />
                        <h3 className="project__title">Site for Practice</h3>
                    </li>

                    <li className="project">
                        <img src={img4} alt="Project img" className="project__img" />
                        <h3 className="project__title">C++ coding</h3>
                    </li>

                    <li className="project">
                        <img src={img5} alt="Project img" className="project__img" />
                        <h3 className="project__title">Coding Games in Python</h3>
                    </li>

                    <li className="project">
                        <img src={img6} alt="Project img" className="project__img" />
                        <h3 className="project__title">HTML Resume</h3>
                    </li>
                </ul>
            </div>
        </main>
    );
}

