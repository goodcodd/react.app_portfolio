import React, { Component } from 'react';
import Image from '../image/Image';
import img1 from '../../assets/img/projects/01.jpg';
import img2 from '../../assets/img/projects/02.jpg';
import img3 from '../../assets/img/projects/03.jpg';
// import img4 from '../../assets/img/projects/04.jpg';
import img5 from '../../assets/img/projects/05.jpg';
import img6 from '../../assets/img/projects/06.jpg';
import img7 from '../../assets/img/projects/07.jpg';
import Button from '../buttons/Button';

const userList = [
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
    image: '404',
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
];

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: userList,
      dragItem: null,
    };
    // this.dragItem = React.useRef < any > null;
    // this.dragOverItem = React.useRef < any > null;
  }

  functionOnDragStart = (e, item) => {
    this.setState({ dragItem: item });
    // eslint-disable-next-line no-console
    console.log('Drag started', item);
  };

  functionOnDragEnter = (e) => {
    e.preventDefault();
  };

  standardSort = () => {
    this.setState(({ list }) => ({
      list: [...list].sort((x, y) => x.data - y.data)
    }));
  };

  sortArray = () => {
    const { list: listCopy } = this.state;
    const arrayLength = listCopy.length;
    for (let i = 0; i < arrayLength; i += 1) {
      for (let j = 0; j < arrayLength - 1; j += 1) {
        if (listCopy[j].data > listCopy[j + 1].data) {
          const temp = listCopy[j];
          listCopy[j] = listCopy[j + 1];
          listCopy[j + 1] = temp;
        }
      }
    }
    this.setState({
      list: listCopy
    });
  };

  AddArray = () => {
    this.setState(({ list }) => {
      const newList = [...list, {
        image: img7,
        description: 'Work with Figma',
        data: 2020
      }];
      return { list: newList };
    });
  };

  DeleteArray = () => {
    this.setState(({ list }) => ({ list: [...list].slice(0, list.length - 1) }));
  };

  render() {
    const { list, dragItem } = this.state;
    // eslint-disable-next-line no-console
    console.log(dragItem);
    return (
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {
                list.map((item) => (
                  <li
                    className="project"
                    key={item.image}
                    draggable
                    onDragStart={(e) => this.functionOnDragStart(e, item)}
                    onDragEnter={(e) => this.functionOnDragEnter(e, item)}
                    onDrop={(e) => this.handleDrop(e, item.id)}
                  >
                    <Image alt="Project img" className="project__img" src={item.image} />
                    <h3 className="project__title">{item.description}</h3>
                    <p className="project__data">{item.data}</p>
                  </li>
                ))
             }

          </ul>

          <div className="btn_projects">
            <Button type="button" className="btn btn_projects" onClick={this.standardSort} text="Сортувати1" />
            <Button type="button" className="btn btn_projects" onClick={this.sortArray} text="Сортувати2" />
            <Button type="button" className="btn btn_projects" onClick={this.AddArray} text="Додати" />
            <Button type="button" className="btn btn_projects" onClick={this.DeleteArray} text="Видалити" />
          </div>

        </div>
      </main>
    );
  }
}
