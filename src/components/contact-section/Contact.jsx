import LinkedIn from "../../assets/images/icons/linkedin-logo.svg"
import WhatsApp from "../../assets/images/icons/whatsapp-logo.svg"
import Email from "../../assets/images/icons/gmail-logo.svg"
import Github from "../../assets/images/icons/github-logo.svg"
import StickyNote from "../styled-components/sticky-note/StickyNote"
import "./contact.css"

const Contact = () => {
    return ( 
        <section className="contact-me" id="contact">
            <h2 className="contacts-heading">Contact</h2>
            <div className="say-hi-text-container">
                <StickyNote
                nameOfClass="contact"
                stickyNoteText="Want to say hi or have a project you want us to collaborate on?"
                />
            </div>
            <div className="contact-icons-container">
                <p className="reach-out-text">Reach out to me!</p>
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
                <div className="push-pins">
                    <div className="push-pin one"></div>
                    <div className="push-pin two"></div>
                </div>
                <form action="" method="post">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <div className="button-container">
                        <svg className="send-button-border" viewBox="0 0 260 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M170.816 6.88309C144.026 7.16167 117.289 8.59417 90.6955 10.0874C72.8427 11.0899 53.1201 11.8722 36.2992 15.2144C21.1386 18.2267 18.8816 23.8514 18.8816 31.1721C18.8816 44.1128 37.2297 54.3016 57.6022 62.1902C82.2946 71.7515 108.867 74.6721 140.537 72.1237C171.019 69.6709 207.054 60.8052 232.716 52.8976C240.205 50.5898 255.652 46.8704 257.502 42.0028C261.697 30.9673 238.559 19.5199 219.184 15.5989C208.963 13.5307 198.454 10.3901 189.038 7.52396C179.904 4.74361 167.646 4.7659 157.418 3.67874C143.667 2.217 126.879 3.42239 112.802 3.42239C81.7726 3.42239 49.6844 6.55034 28.5283 17.2652C9.44256 26.9314 9.41952 44.3544 24.7768 55.5892C31.9615 60.8453 41.0968 64.6872 51.4391 68.5348C59.3023 71.4602 70.2905 69.7358 79.1732 70.5856C90.7201 71.6902 102.269 71.4828 114.008 71.4828C131.355 71.4828 148.321 70.6328 165.457 70.3292C170.941 70.2321 181.422 68.3781 186.492 67.4453C199.277 65.0933 214.252 65.6287 225.213 61.1007C235.555 56.8283 252.813 54.8949 252.813 47.2579C252.813 41.1134 257.086 35.476 254.019 29.3136C243.954 9.09323 194.489 5.88074 157.686 2.84561C141.286 1.4931 123.706 2.26882 107.041 2.26882C92.068 2.26882 62.3764 0.566483 50.2332 5.72952C40.1015 10.0373 28.0354 12.5976 17.8098 17.2011C5.49349 22.7458 2 30.6186 2 38.2857C2 47.2866 8.86406 55.1555 22.4991 61.6775C39.4469 69.7841 62.6762 70.3292 85.4703 70.3292C121.572 70.3292 159.638 72.1373 194.933 68.2785C211.111 66.5097 229.66 65.2538 241.96 59.3704C255.818 52.742 256.23 46.0134 255.224 36.8758C254.477 30.0838 238.586 25.176 231.108 20.4695C225.416 16.8869 210.259 10.1143 200.962 9.12614C195.482 8.54363 194.399 7.01131 187.162 6.88309C174.605 6.66063 162.179 5.72952 149.245 5.72952C133.927 5.72952 118.608 5.72952 103.29 5.72952C90.4099 5.72952 79.7144 9.19022 67.1149 9.19022" stroke-linecap="round"/>
                        </svg>
                        <button className="send-button">Send message</button>
                    </div>
                </form>
                <div className="push-pins">
                    <div className="push-pin three"></div>
                    <div className="push-pin four"></div>
                </div>
            </div>

        </section>
     );
}
 
export default Contact;