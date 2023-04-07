import '../styles/main.css';

import Navbar from '../components/parts/Navbar';
import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';

import ApiFile from '../components/parts/ApiFile';
import Projects from '../components/parts/Projects';
import Skills from '../components/parts/Skills';
import Contacts from '../components/parts/Contacts';
import LightDarkContext from '../components/context/LightDarkContext';
import {Component} from "react";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myTemplate: 'light'
        }
        this.changeTemplate = this.changeTemplate.bind(this);
    }
    componentDidMount() {
        this.changeTemplate();
    }

    changeTemplate(){
        this.setState((prevState) => ({
            myTemplate: prevState.myTemplate === 'light' ? 'dark' : 'light'
        }))
    }
    render() {
        const { myTemplate } = this.state;
        return (
            <div className="App">
                <LightDarkContext.Provider value={myTemplate}>
                    <Navbar changeTemplate={this.changeTemplate}/>
                    <Header />
                    <Projects />
                    <ApiFile />
                    <Skills />
                    <Contacts />
                    <Footer />
                </LightDarkContext.Provider>
            </div>

        );
    }
}
export default Main;
