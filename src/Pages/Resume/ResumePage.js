import './ResumePage.scss';
import resumePDF from "../../Assets/resumeimg.png";

function ResumePage() {
    return (
        <div className="resume">
            
            <img className='resume__document' src={resumePDF}/>
        </div>
    );
}


export default ResumePage;
