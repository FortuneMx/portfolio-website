import './sticky-note.css'
//import Laptop from "../../assets/images/laptop-icon.svg"

const StickyNote = ({nameOfClass="", stickyNoteText="", imageUrl=""}) => {
    
    return ( 
        // to make a sticky note you need
        // the tap
        // the note itself where you'll write your stuff
        // the shadow effect as well
        <div className={`sticky-note ${nameOfClass}`}>
            <div className="tape"></div>
            <div className="note">
                {
                    imageUrl && (
                      <img className="logo" src={imageUrl} alt="" />  
                    )
                }
                <p className="sticky-note-text">{stickyNoteText}</p>
            </div>
        </div>
        

    );
  

}
 
export default StickyNote;