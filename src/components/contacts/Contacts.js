import React from 'react'
import diskord from "../../assets/icons/diskord.png";
import Link from "../links/Link";
import Image from "../image/Image";
import github from "../../assets/icons/github.png";

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
                            <p>
                                <Link href={"https://t.me/A_Lytvyn"}
                                      target={"_blank"}
                                      rel={"noreferrer"}
                                      text={"A_Lytvyn"}
                                />
                            </p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p>
                                <Link href="mailto:2858.allo.113@gmail.com"
                                      text="2858.allo.113@gmail.com"
                                />
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}