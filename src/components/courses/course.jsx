import { useEffect, useState } from "react";
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import CRoot from "./CRoot";
import useTokenCheck from "../useTokenCheck";
export default function Courses() {
    const [courses, setCourses] = useState([]); 
    const navigate = useNavigate();
    useTokenCheck();
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = localStorage.getItem('token');
                if(token){
                    console.log('token front',token);
                const response = await axios.get(`https://back-end-pffp.onrender.com/courses`,{
                // const response = await axios.get(`http://localhost:5000/courses`,{
                    headers:{'Authorization':`Bearer ${token}` }
                });
                setCourses(response.data); 
                console.log(response.data);
                }
               else{
                  navigate('/login')
               }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchCourses();
    }, []);
    return (
        <>
            <CRoot />
            <div className="container mt-5">
                <div className="row p-lg-5 text-center">
                    {courses.map((course) => (
                        <div className="col-md-6 col-lg-4 p-4 d-flex justify-content-center" key={course.course}>
                            <Link to={`/lessons/${course.course}`} style={{ textDecoration: 'none' }}>
                                <div className="p-4 rounded shadow" style={{ border: '20px solid purple' }}>
                                    <h3 className="text-success">
                                        <FontAwesomeIcon style={{ color: 'orange', marginRight: '2px' }} icon={faCertificate} />
                                             {course.course_name}
                                    </h3>
                                    <hr />
                                    <h6 className="text-secondary">Instructor</h6>
                                    <h5 className="text-info"><i>{course.instructor_name}</i></h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}