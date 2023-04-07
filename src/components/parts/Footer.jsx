import React from 'react';
import Link from '../links/Link';
import Image from '../image/Image';

import github from '../../assets/icons/github.png';
import instagram from '../../assets/icons/instagram.png';
import dickord from '../../assets/icons/diskord.png';

import LightDarkContext from '../context/LightDarkContext';

export default function Footer() {
  return (
      <LightDarkContext.Consumer>
        {
          (myTemplate) => (
              <footer className={myTemplate === 'light' ? 'footer light' : 'footer dark'}>
                <div className="container">
                  <div className="footer__wrapper">
                    <ul className="social">
                      <li className="social__item">
                        <Link
                          href="https://github.com/goodcodd?tab=repositories"
                          target="_blank"
                          rel="noreferrer"
                          text={<Image src={github} alt="link" />}
                        />
                      </li>

                      <li className="social__item">
                        <Link
                          href="https://www.instagram.com/nastasya0.05/"
                          target="_blank"
                          rel="noreferrer"
                          text={<Image src={instagram} alt="link" />}
                        />
                      </li>

                      <li className="social__item">
                        <Link
                          href="https://discord.com/channels/534496884849639455/637273705579413533"
                          target="_blank"
                          rel="noreferrer"
                          text={<Image src={dickord} alt="link" />}
                        />
                      </li>

                    </ul>
                    <div className="copyright">
                      <p>© 2023 Lytvyn Anastasya</p>
                    </div>
                  </div>
                </div>
            </footer>
          )
        }
      </LightDarkContext.Consumer>
  );
}
