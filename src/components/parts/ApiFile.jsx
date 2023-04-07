import React, { Component } from 'react';
import Image from '../image/Image';
import Counter from '../HOC/Counter';
import LightDarkContext from '../context/LightDarkContext';


export default class ApiFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      count: 0
    };
    // this.pagesNumber = 1;
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.drinks
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const {
      error, isLoaded, items, count 
    } = this.state;
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
        <LightDarkContext.Consumer>
          {
            (myTemplate) => (
                <main className={myTemplate === 'light' ? 'api_section light' : 'api_section dark'}>
                  <div className="container">
                    <h1 className="api_h">Drinks</h1>
                    <ul className="api__list">
                      {items.map((item) => (
                        <li key={item.idDrink}>
                          {item.strDrink}
                          <br />
                          <Image className="api__img" src={item.strDrinkThumb} alt="api" />
                        </li>
                      ))}
                      <div className="container">
                        <Counter
                          count={count}
                          onCountUp={() => this.setState({ count: count + 1 })}
                          onCountDown={() => this.setState({ count: count - 1 })}
                        />
                      </div>
                    </ul>
                  </div>
                </main>
            )
          }
        </LightDarkContext.Consumer>
    );
  }
}
