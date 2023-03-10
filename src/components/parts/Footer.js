import React from 'react';
import Link from '../links/Link';
import Image from '../image/Image';

import github from '../../assets/icons/github.png';
import instagram from '../../assets/icons/instagram.png';
import diskord from '../../assets/icons/diskord.png';

export default function Footer() {
  return (
    <footer className="footer">
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
                text={<Image src={diskord} alt="link" />}
              />
            </li>

          </ul>
          <div className="copyright">
            <p>© 2023 Lytvyn Anastasya</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
