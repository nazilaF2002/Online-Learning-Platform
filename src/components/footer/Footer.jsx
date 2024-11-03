import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import './footer.css';
export default function Footer (){
    const currentYear = new Date().getFullYear();
    return(
        <div className="p-5 position-relative footer_div" style={{backgroundColor:"rgb(71, 19, 107)"}}>
           <div className="row text-white text-center ">
            <div className="col-12 ">
                <a href="#" className="Footer_Icon"><FontAwesomeIcon icon={faX} /> </a>
                <a href="#" className="Footer_Icon"><FontAwesomeIcon icon={faGithub} /> </a>
                <a href="#" className="Footer_Icon"><FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
            <div className="col-12">© {currentYear} Online-Tech all right reserved  </div>
           </div>
           <div className="Go_up_Icon bg-white text-center d-flex justify-content-center align-items-center"><a href="#"><FontAwesomeIcon icon={faArrowUp}/> </a> </div>
        </div>
    );
}