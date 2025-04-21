import LinkedIn from "../../assets/images/icons/linkedin-logo.svg"
import WhatsApp from "../../assets/images/icons/whatsapp-logo.svg"
import Email from "../../assets/images/icons/gmail-logo.svg"
import Github from "../../assets/images/icons/github-logo.svg"

const Contact = () => {
    return ( 
        <section className="contact-me" id="contact">
            <div className="say-hi-text-container">
                {/* this should be a sticky note, make use of sticky note component */}
                <p className="say-hi-text">Want to say hi or have a project you want us to collaborate on?</p>
            </div>
            <div className="contact-icons-container">
                <p>Reach out to me!</p>
                <ul className="contact-icons-list">
                    <li className="contact-icon">
                        <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>
                    </li>
                    <li className="contact-icon">
                        <a href=""><img src={WhatsApp} alt="WhatsApp" /></a>
                    </li>
                    <li className="contact-icon">
                        <a href=""><img src={Email} alt="Email" /></a>
                    </li>
                    <li className="contact-icon">
                        <a href=""><img src={Github} alt="Github" /></a>
                    </li>
                </ul>
            </div>
            <p className="or-text">or</p>
            <p className="email-text">Shoot me an email and I’ll get back to you soonest!</p>
            {/* contact card should be a component as well */}
            <div className="contact-form">
                <form action="" method="post">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>

        </section>
     );
}
 
export default Contact;