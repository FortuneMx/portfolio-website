import Flower from "../../assets/images/flower.svg"
import "./about.css"

const About = () => {
    return ( 
        <section className="about-me" id="about">
            <div className="journal-page">
                <img className="flower-one" src={Flower} alt="flower" />
                <h2 className="about-heading">About me</h2>
                <div className="journal-text">
                    <p>
                    I’m a <span className="fullstack-text">full-stack developer</span> with a passion for experimenting and discovering new ways to 
                    bring ideas to life. <span className="about-me-span">If there’s a challenge, I’m all in, ready to learn and 
                    make it happen!</span>
                    </p>

                    <p>When I’m not debugging code, you’ll find me watching anime or diving 
                    into my latest quirky interest (right now, I’m dabbling in <span className="design-text">UI/UX design</span>).  
                    </p>
                </div>
                <img className="flower-two" src={Flower} alt="flower" />    
            </div>
            
        </section>
     );
}
 
export default About;