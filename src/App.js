import Home from "./components/homepage-section/Home";
import Navbar from "./components/navigation-section/Navbar";
import Projects from "./components/projects-section/Projects.jsx";
import About from "./components/about-section/About";
import Contact from "./components/contact-section/Contact";

const App = () => { 

  return (
    <div className="App">
      {/* <Navbar/>       */}
      <div className="content">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  
  );
}

export default App; 
