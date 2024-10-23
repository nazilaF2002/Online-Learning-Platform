
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import CRoot from "./CRoot";

export default function Courses() {
    const [courses, setCourses] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/courses`);
                setCourses(response.data); // Ensure your backend sends this
                console.log(response.data);
                
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
                        <div className="col-md-6 col-lg-4 p-5 d-flex justify-content-center" key={course.id}>
                            <Link to={`/lessons/${course.course}`} style={{ textDecoration: 'none' }}>
                                <div className="p-4 rounded shadow" style={{ border: '20px solid purple' }}>
                                    <h3 className="text-success">
                                        <FontAwesomeIcon style={{ color: 'orange', marginRight: '2px' }} icon={faCertificate} />
                                        {course.courseName}
                                    </h3>
                                    <hr />
                                    <h6 className="text-secondary">Instructor</h6>
                                    <h5 className="text-info"><i>{course.teacherName}</i></h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}