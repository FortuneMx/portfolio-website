import './sticky-note.css'
import Laptop from "../../assets/images/laptop-icon.svg"

const StickyNote = (nameOfClass, stickyNoteText, imageUrl="") => {
    const text = 'Some text on the sticky note that happens to be super long';
    const image = Laptop
    return ( 
        // to make a sticky note you need
        // the tap
        // the note itself where you'll write your stuff
        // the shadow effect as well
        <div className="sticky-note">
            <div className="tape"></div>
            <div className="note">
                {
                    image && (
                      <img className="logo" src={image} alt="" />  
                    )
                }
                <p className="sticky-note-text">{text}</p>
            </div>
        </div>
        

    );
  

}
 
export default StickyNote;