import '../styles/main.css';

import Navbar from '../components/parts/Navbar';
import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';

import Projects from '../components/parts/Projects';
import Skills from '../components/parts/Skills';
import Contacts from '../components/parts/Contacts';

function Main() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}
export default Main;
