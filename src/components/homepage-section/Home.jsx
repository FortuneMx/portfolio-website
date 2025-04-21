// homepage is in two sections
// left section and right section (on wider screens)
// top section and bottom section (on smaller screen)
// we are doing a mbile first approach so we start with phone view in mind

import BottomRightSection from "./BottomRightSection";
import TopLeftSection from "./TopLeftSection";

const Homepage = () => { 

    return (
        <section className="home" id="home">
            <TopLeftSection/>
            <BottomRightSection/>            
        </section>     
    );
  }
  
  export default Homepage; 
  