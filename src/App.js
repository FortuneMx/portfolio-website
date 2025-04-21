import Home from "./components/homepage-section/Home";
import Navbar from "./components/navigation-section/Navbar";
import Projects from "./components/projects-section/Projects";
import About from "./components/about-section/About";

const App = () => { 

  return (
    <div className="App">
      <Navbar/>      
      <div className="content">
        <Home/>
        <About/>
        <Projects/>
      </div>
    </div>
  
  );
}

export default App; 
