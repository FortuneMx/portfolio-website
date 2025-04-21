import Home from "./components/homepage-section/Home";
import Navbar from "./components/navigation-section/Navbar";

const App = () => { 

  return (
    <div className="App">
      <Navbar/>      
      <div className="content">
       <Home/> 
      </div>
    </div>
  
  );
}

export default App; 
