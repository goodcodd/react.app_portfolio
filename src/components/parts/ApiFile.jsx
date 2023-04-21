import React, { useState, useEffect } from 'react';
import Image from '../image/Image';
import Counter from '../HOC/Counter';
import LightDarkContext from '../context/LightDarkContext';

export default function ApiFile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then((response) => response.json())
        .then((result) => {
          setIsLoaded(true);
          setItems(result.drinks);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
        });
  }, []);

  if (error) {
    return (
        <p>
          Error
          {error.message}
        </p>
    );
  }
  if (!isLoaded) {
    return <p> Loading! </p>;
  }

  return (
      <LightDarkContext.Consumer>
        {(myTemplate) => (
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
                        onCountUp={() => this.setState(({ count }) => ({ count: count + 1 }))}
                        onCountDown={() => this.setState(({ count }) => ({ count: count - 1 }))}
                    />
                  </div>
                </ul>
              </div>
            </main>
        )}
      </LightDarkContext.Consumer>
  );
}