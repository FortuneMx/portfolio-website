import MenuIcon from "../../assets/images/light-menu.svg"
import CloseIcon from "../../assets/images/x-mark.svg"

const Navbar = () => {
    return ( 
        <section className="navbar">
            <img src={MenuIcon} alt="hamburger menu" />
            <img src={CloseIcon} alt="close icon" />
            <ul className="navbar-list">
                <li className="navbar-list-item">
                    <a href="#home">Home</a>
                </li>
                <li className="navbar-list-item">
                    <a href="#about">About</a>
                </li>
                <li className="navbar-list-item">
                    <a href="#projects">Projects</a>  
                </li>
                <li className="navbar-list-item">
                    <a href="#contact">Contact</a> 
                </li>
            </ul>
        </section>

     );
}
 
export default Navbar;