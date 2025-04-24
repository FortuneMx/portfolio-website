import GirlCoding from "../../assets/images/background-images/girl-coding.png"
import ThinkingCloud from "../../assets/images/cloud.svg"

const TopLeftSection = () => {
    return ( 
        <section className="top-left-section">
            <div className="header-section">
                <img className="thinking-cloud" src={ThinkingCloud} alt="thinking cloud" />
                <div className="intro-text-container">
                    <p className="intro-text">Hi there👋! I’m Fortune.</p>
                    <h3 className="intro-heading"> Full-stack web developer</h3>     
                </div>  
            </div>
            <img className="girl-coding-image" src={GirlCoding} alt="girl coding" />
        </section>
     );
}
 
export default TopLeftSection;