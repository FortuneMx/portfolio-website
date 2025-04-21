const Projects = () => {
    return ( 
        <section className="my-projects" id="projects">
            <h2>My Projects</h2>
            {/* each project must be in a card component but for now place it in a div */}
            <div className="projects-card">
                <h3 className="project-title">Student Accommodation Finder</h3>
                <p className="project-description">A web application that connects students with landlords for housing.</p>
                <ul className="technologies-used-container">
                    <li className="tech-used">React</li>
                    <li className="tech-used">Node js</li>
                    <li className="tech-used">Express</li>
                    <li className="tech-used">Mongo DB</li>
                </ul>
                <div className="buttons-conatiner">
                    <button className="view-button">View Project</button>
                    <button className="github-button">Github</button>
                </div>
            </div>
        </section>
     );
}
 
export default Projects;