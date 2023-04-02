import React from 'react';

export default function Skills() {
  return (
    <main className="section">
      <div className="slills-container" id="skills">
        <div className="container">
          <h1 className="title-1">About us</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">CRAFT</h2>
              <p>Our team creates custom cocktails with the freshest ingredients.</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">GATHER</h2>
              <p>Find a spot at the bar, which winds throughout our space.</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">ENJOY</h2>
              <p>Drinks created especially to your taste.</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
