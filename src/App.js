import Home from "./components/homepage-section/Home";
import Navbar from "./components/navigation-section/Navbar";
import Projects from "./components/projects-section/Projects.jsx";
import About from "./components/about-section/About";
import Contact from "./components/contact-section/Contact";
import Copyright from "./components/footer/Copyright.jsx";

const App = () => { 

  return (
    <div className="App">
      {/* <Navbar/>       */}
      <div className="content">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Copyright/>
      </div>
    </div>
  
  );
}

export default App; 
