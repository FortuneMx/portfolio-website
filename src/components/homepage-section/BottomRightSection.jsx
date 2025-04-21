import LightBulb from "../../assets/images/bulb.svg"
import Laptop from "../../assets/images/laptop-icon.svg"
import HandrawnBorder from "../../assets/images/handrawn-border.svg"


const BottomRightSection = () => {
    return ( 
        <section className="bottom-right-section">
            <div className="description-container">
                <span className="i-like-text"> I like </span>
                <span className="transforming-text">transforming</span> 
                <div className="ideas-text-conatiner">
                    <img src={LightBulb} alt="light bulb" />
                    <span className="ideas-text">ideas</span>
                </div>
                into functional
                {/* the web apps text should be inside a sticky note component */}
                <div className="web-apps-text-container">
                    <img src={Laptop} alt="laptop" />
                    <span className="web-apps-text">web apps</span>                
                </div>
                one line of <span className="code-text">{"{"}code{"}"} </span>at a time.
            </div>
            <div className="button-container">
                <img src={HandrawnBorder} alt="handrawn border" />
                <button className="resume-button">Resume</button>
            </div>
            
        </section>
     );
}
 
export default BottomRightSection;