import React from 'react'
import img1 from "../../assets/img/projects/01.jpg";
import img2 from "../../assets/img/projects/02.jpg";
import img3 from "../../assets/img/projects/03.jpg";
import img4 from "../../assets/img/projects/04.jpg";
import img5 from "../../assets/img/projects/05.jpg";
import img6 from "../../assets/img/projects/06.jpg";

export default function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <img alt={"Project img"} className={"project__img"} src={img1}/>
                        <h3 className="project__title">Global Game Jam 2023</h3>
                    </li>

                    <li className="project">
                        <img alt={"Project img"} className={"project__img"} src={img2}/>
                        <h3 className="project__title">First html/css project</h3>
                    </li>

                    <li className="project">
                        <img alt={"Project img"} className={"project__img"} src={img3}/>
                        <h3 className="project__title">Site for Practice</h3>
                    </li>

                    <li className="project">
                        <img alt={"Project img"} className={"project__img"} src={img4}/>
                        <h3 className="project__title">C++ coding</h3>
                    </li>

                    <li className="project">
                        <img alt={"Project img"} className={"project__img"} src={img5}/>
                        <h3 className="project__title">Coding Games in Python</h3>
                    </li>

                    <li className="project">
                        <img alt={"Project img"} className={"project__img"} src={img6}/>
                        <h3 className="project__title">HTML Resume</h3>
                    </li>
                </ul>
            </div>
        </main>
    );
}

