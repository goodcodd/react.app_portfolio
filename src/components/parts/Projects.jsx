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

export const ARROW_LEFT_KEY_CODE = 37;
export const ARROW_RIGHT_KEY_CODE = 39;

const userList = [
  {
    id: 0,
    image: img6,
    description: 'Happy moments',
    data: 2023
  },
  {
    id: 1,
    image: img1,
    description: 'Summer vibes',
    data: 2022
  },
  {
    id: 2,
    image: img2,
    description: 'Our incredible visitors',
    data: 2020
  },
  {
    id: 3,
    image: img3,
    description: 'New coctails',
    data: 2023
  },
  {
    id: 4,
    image: '404',
    description: 'Cozy atmosphere',
    data: 2019
  },
  {
    id: 5,
    image: img5,
    description: 'Our bartenders are the best',
    data: 2022
  }
];

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: userList,
      ActiveItemId: null,
      SelectedItemId: 0
    };
    this.dragItem = null;
    this.dragOverItem = null;
  }

  componentDidMount() {
    this.setState({ list: userList });
    document.addEventListener('keyup', this.handleKey);
  }

  handleKey = (event) => {
    let { SelectedItemId } = this.state;
    if (SelectedItemId === null) {
      SelectedItemId = 0;
    }
    const { list } = this.state;
    switch (event.keyCode) {
      case ARROW_LEFT_KEY_CODE:
        this.setState({
          SelectedItemId:
              SelectedItemId = (SelectedItemId - 1) < 0 ? (list.length - 1) : (SelectedItemId - 1)
        });
        break;
      case ARROW_RIGHT_KEY_CODE:
        this.setState({
          SelectedItemId: SelectedItemId = (SelectedItemId + 1) % list.length
        });
        break;
      default: this.setState({ SelectedItemId: null });
    }
    // const hotKey = {
    //   [ARROW_LEFT_KEY_CODE]: () => this.setState({ SelectedItemId: SelectedItemId -= 1 }),
    //   [ARROW_RIGHT_KEY_CODE]: () => this.setState({ SelectedItemId: SelectedItemId += 1 })
    // };
    // hotKey[event.keyCode]?.();
  };

  functionOnDragStart = (item) => {
    this.dragItem = item;
    // eslint-disable-next-line no-console
    console.log('Drag started', item);
  };

  functionOnDragEnter = (item) => {
    this.dragOverItem = item;
    this.setState({ ActiveItemId: item });
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
    this.setState({ list: newItems, ActiveItemId: null });
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
        description: 'The most excited visitors',
        data: 2020
      }];
      return { list: newList };
    });
  };

  DeleteArray = () => {
    this.setState(({ list }) => ({ list: [...list].slice(0, list.length - 1) }));
  };

  getClassName = (item) => {
    let className = 'project';
    const { ActiveItemId, SelectedItemId } = this.state;
    if (item === ActiveItemId) {
      className += ' project-active';
    }
    if (item === SelectedItemId) {
      className += ' project-selected';
    }
    // eslint-disable-next-line no-console
    console.log(className);
    return className;
  };

  render() {
    const { list } = this.state;
    return (
      <main className="section">
        <div className="container" id="projects">
          <h2 className="title-1">Gallery Page</h2>
          <ul className="projects">
            {
                list.map((item) => (
                  <li
                    className={this.getClassName(item.id)}
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
        <hr className="hr" />
      </main>
    );
  }
}
