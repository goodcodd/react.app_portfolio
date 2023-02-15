import React from 'react'

export default function Contacts() {
    return (
        <main className="section">
            <div className="contacts-container" id='contacts'>
                <div className='container'>

                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Kropyvnytskyi, Ukraine</p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="https://t.me/A_Lytvyn"
                                  target="_blank"
                                  rel="noreferrer">
                                A_Lytvyn
                                </a>
                            </p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:2858.allo.113@gmail.com"
                                  target="_blank"
                                  rel="noreferrer">
                                2858.allo.113@gmail.com
                            </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}