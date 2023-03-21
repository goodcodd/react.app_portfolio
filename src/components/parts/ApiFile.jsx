import React, { Component } from 'react';
import Image from '../image/Image';

export default class ApiFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
      // currentPage: 0
    };
    // this.pagesNumber = 1;
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(
        (response) => response.json()
      )
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks
          });
          // this.pagesNumber = Math.ceil(result.drinks.length / 12);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <p>
          {' '}
          Error
          {error.message()}
        </p>
      );
    } if (!isLoaded) {
      return <p> Loading! </p>;
    }
    return (
      <main className="section">
        <div className="container">
          <ul className="api__list">
            {items.map((item) => (
              <li key={item.idDrink}>
                {item.strDrink}
                <Image className="api__img" src={item.strDrinkThumb} alt="api" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
