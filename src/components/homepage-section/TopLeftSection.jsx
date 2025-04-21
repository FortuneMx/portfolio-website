import GirlCoding from "../../assets/images/background-images/girl-coding.png"
import ThinkingCloud from "../../assets/images/cloud.svg"

const TopLeftSection = () => {
    return ( 
        <section className="top-left-section">
            <div className="header-section">
                <img src={ThinkingCloud} alt="thinking cloud" />
                <p>Hi there! I'm Fortune.</p>
                <h3>Full-stacK web developer</h3>   
            </div>
            
            <img src={GirlCoding} alt="girl coding" />
        </section>
     );
}
 
export default TopLeftSection;