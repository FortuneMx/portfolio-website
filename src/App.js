import Home from "./components/homepage-section/Home";
import Navbar from "./components/navigation-section/Navbar";
import Projects from "./components/projects-section/Projects";

const App = () => { 

  return (
    <div className="App">
      <Navbar/>      
      <div className="content">
        <Home/>
        <Projects/>
      </div>
    </div>
  
  );
}

export default App; 
