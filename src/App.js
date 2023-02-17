import "./assets/styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";

import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";

function App() {
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
export default App;