import Flower from "../../assets/images/flower.svg"

const About = () => {
    return ( 
        <section className="about-me" id="about">
            <img src={Flower} alt="flower" />
            <h2>About me</h2>

            <p>
            I’m a <span className="fullstack-text">full-stack developer</span> with a passion for experimenting and discovering new ways to 
            bring ideas to life. <span className="about-me-span">If there’s a challenge, I’m all in, ready to learn and 
            make it happen!</span>
            </p>

            <p>When I’m not debugging code, you’ll find me watching anime or diving 
            into my latest quirky interest (right now, I’m dabbling in <span className="design-text">UI/UX design</span>).  
            </p>
            <img src={Flower} alt="flower" />
        </section>
     );
}
 
export default About;