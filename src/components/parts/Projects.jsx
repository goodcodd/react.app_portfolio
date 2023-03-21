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
    id: 0,
    image: img6,
    description: 'HTML Resume',
    data: 2022
  },
  {
    id: 1,
    image: img1,
    description: 'Global Game Jam',
    data: 2023
  },
  {
    id: 2,
    image: img2,
    description: 'First html/css project',
    data: 2020
  },
  {
    id: 3,
    image: img3,
    description: 'Site for Practice',
    data: 2022
  },
  {
    id: 4,
    image: '404',
    description: 'C++ coding',
    data: 2021
  },
  {
    id: 5,
    image: img5,
    description: 'Coding Games in Python',
    data: 2019
  }
];

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: userList
    };
    this.dragItem = null;
    this.dragOverItem = null;
  }

  componentDidMount() {
    this.setState({ list: userList });
  }

  functionOnDragStart = (item) => {
    this.dragItem = item;
    // eslint-disable-next-line no-console
    console.log('Drag started', item);
  };

  functionOnDragEnter = (item) => {
    this.dragOverItem = item;
    // eslint-disable-next-line no-console
    console.log('Drag enter', item);
  };

  handleDrop = () => {
    const { list } = this.state;

    if (this.dragItem === this.dragOverItem) return;

    const draggingItemIndex = list.findIndex((item) => item.id === this.dragItem);
    const overItemIndex = list.findIndex((item) => item.id === this.dragOverItem);

    const newItems = [...list];

    newItems.splice(draggingItemIndex, 1);
    newItems.splice(overItemIndex, 0, list[draggingItemIndex]);// Swap items
    this.dragItem = null;
    this.dragOverItem = null;
    this.setState({ list: newItems });
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
        id: list.length + 1,
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
    const { list } = this.state;
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
                    onDragStart={() => this.functionOnDragStart(item.id)}
                    onDragEnter={() => this.functionOnDragEnter(item.id)}
                    onDragEnd={() => this.handleDrop()}
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
