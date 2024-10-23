import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './StudentList.css';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useLocation ,useParams} from 'react-router-dom';
import axios from 'axios';

export default function StudentList() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
    const params = useParams();
    const lessonId = params.id;
    let [students, setStudents] = useState([]);
    let [genderFilter, setGenderFilter] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/lessons/${currentPath}/students`);
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchStudents();
    }, [currentPath]);

    // Handle gender filter change
    const handleGenderChange = (gender) => {
        setGenderFilter(gender);
    };

    // Filter students based on the selected gender
    const filteredStudents = genderFilter
        ? students.filter(student => student.gender.toLowerCase() === genderFilter.toLowerCase())
        : students;
//  delte student
        const handleDeleteStudent = async (e, lessonId) => {
            e.preventDefault();
            const confirmDelete = window.confirm("Are you sure you want to delete this Student ?");
            if (!confirmDelete) return;
    
            try {
                await axios.delete(`http://localhost:5000/lessons/${currentPath}/students/delete/${lessonId}`);
                // setLessons(prevLessons => prevLessons.filter(item => item.id !== lessonId));
                setStudents(prevLessons => prevLessons.filter(item => item.id !== lessonId));
            } catch (err) {
                console.log('An error occurred: ' + err);
            }
        };


    return (
        <>
            <div className="mt-5  pt-5 _overflow">
                <div className="px-5">
                    <div className="gender-filter">
                        {["", "Male", "Female"].map(gender => (
                            <button
                                key={gender}
                                className={`filter-button ${genderFilter === gender ? '_active' : ''}`}
                                onClick={() => handleGenderChange(gender)}
                            >
                                {gender || "All"}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row p-5">
                    {filteredStudents.map((student) => (
                        <div className="col-md-6 col-lg-3" key={student.id}>
                            <div className="py-2 px-2 px-md-4 border mb-3 p-relative shadow rounded _hover">
                                <h4 className="text-success _title">{student.fname} {student.lname}</h4>
                                <a href='#' style={{ textDecoration: 'none' }}><h6 className="text-info">{student.email}</h6></a>
                                <h6 className="text-secondary">{student.gender}</h6>
                                <form onSubmit={(e)=>handleDeleteStudent(e,student.id)}>
                                <button type="submit" style={{ outline: 'none', border: 'none' }} className='bg-white delete_icon'>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}