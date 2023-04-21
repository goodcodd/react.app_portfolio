import React, { useState, useEffect } from 'react';
import Navbar from '../components/parts/Navbar';
import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import ApiFile from '../components/parts/ApiFile';
import Projects from '../components/parts/Projects';
import Skills from '../components/parts/Skills';
import Contacts from '../components/parts/Contacts';
import LightDarkContext from '../components/context/LightDarkContext';
import '../styles/main.css';

const Main = () => {
    const [myTemplate, setMyTemplate] = useState('light');

    useEffect(() => {
        changeTemplate();
    }, []);

    const changeTemplate = () => {
        setMyTemplate((prevState) => prevState === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="App">
            <LightDarkContext.Provider value={myTemplate}>
                <Navbar changeTemplate={changeTemplate} />
                <Header />
                <Projects />
                <ApiFile />
                <Skills />
                <Contacts />
                <Footer />
            </LightDarkContext.Provider>
        </div>
    );
};

export default Main;
