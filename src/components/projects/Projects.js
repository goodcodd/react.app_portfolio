import React, {Component} from 'react'
import Image from "../image/Image";
import img1 from "../../assets/img/projects/01.jpg";
import img2 from "../../assets/img/projects/02.jpg";
import img3 from "../../assets/img/projects/03.jpg";
import img4 from "../../assets/img/projects/04.jpg";
import img5 from "../../assets/img/projects/05.jpg";
import img6 from "../../assets/img/projects/06.jpg";
import img7 from "../../assets/img/projects/07.jpg";

let userList = [
    {
        image: img1,
        description: 'Global Game Jam',
        data: 2023
    },
    {
        image: img2,
        description: 'First html/css project',
        data: 2020
    },
    {
        image: img3,
        description: 'Site for Practice',
        data: 2022
    },
    {
        image: img4,
        description: 'C++ coding',
        data: 2021
    },
    {
        image: img5,
        description: 'Coding Games in Python',
        data: 2019
    },
    {
        image: img6,
        description: 'HTML Resume',
        data: 2022
    }
]

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: userList
        }
    }

    standardSort = () => {
        this.setState(({list}) => list.sort(
            (x, y) => x.data - y.data
        ))
    }
    sortArray = () => {
        let array = this.state.list;
        let arrayLength = array.length;
        for (let i = 0; i < arrayLength; i++) {
            for (let j = 0; j < arrayLength - 1 ; j++) {
                if (array[j].data > array[j+1].data) {
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        this.setState({
            list: array
        });
    }
    AddArray = () => {
        this.setState(({list}) => list.push({
            image: img7,
            description: 'Work with Figma',
            data: 2020
        }))
    }

    DeleteArray = () => {
        this.setState(({list}) => list.pop())
    }
    render() {
        let list = this.state.list
        return (
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">

                        {
                            list.map((item,i) =>
                                (<li className="project" key={i}>
                                    <Image alt={"Project img"} className={"project__img"} src={item.image}/>
                                    <h3 className="project__title">{item.description}</h3>
                                    <p className="project__data">{item.data}</p>
                                </li> ))
                         }


                    </ul>

                    <div className={'btn_projects'}>
                        <button className={'btn btn_projects'} onClick={this.standardSort}>Сортувати1</button>
                        <button className={'btn btn_projects'} onClick={this.sortArray}>Сортувати2</button>
                        <button className={'btn btn_projects'} onClick={this.AddArray}>Додати</button>
                        <button className={'btn btn_projects'} onClick={this.DeleteArray}>Видалити</button>
                    </div>

                </div>
            </main>
        );
    }

}

