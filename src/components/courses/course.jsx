import { faDiscourse } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCertificate, faChartLine, faDesktop, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import CRoot from "./CRoot";
export default function Courses(){
    const courses=[
        {
            id:1,
            courseName:'Front-End',
            teacherName:'Olvia Smith'
        },
        {
            id:2,
            courseName:'Back-End',
            teacherName:'Noah Davis'
        },
        {
            id:3,
            courseName:'UI & UX',
            teacherName:'Emma Johson'
        },
    ];
    return(
        <>
        <CRoot/>
        <div className="container mt-5">
            <div className="row p-lg-5 text-center">
                {
                    courses.map((course)=>(
                       
                        <div className="col-md-6 col-lg-4 p-5 d-flex justify-content-center"  key={course.id} >
                        <Link to={'/lessons'} style={{textDecoration:'none'}}>
                        <div className="  p-4  rounded shadow" style={{border:'20px solid purple'}}>
                         <h3 className="text-success"> <FontAwesomeIcon style={{color:'orange',marginRight:'2px'}} icon={faCertificate} />{course.courseName} </h3>
                          <hr />
                          <h6 className="text-secondary">Instructor</h6>
                          <h5 className="text-info"><i>{course.teacherName}</i></h5>
                        </div>
                       </Link>
                     </div>
                 
                    ))
                }
               
            </div>
        </div>
        </>
    );
}