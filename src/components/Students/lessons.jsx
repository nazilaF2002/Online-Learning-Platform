import { faEdit, faTrashCan, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './Lessons.css';

export default function Lessons() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const lessonId = params.id;
    let [lessons, setLessons] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");

    // Extract the current path segment
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/lessons/${currentPath}`);
                setLessons(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchLessons();
    }, [currentPath]);

    const handleAddLesson = (e) => {
        e.preventDefault();
        navigate(`/lessons/${currentPath}/new`);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDeleteLesson = async (e, lessonId) => {
        e.preventDefault();
        const confirmDelete = window.confirm("Are you sure you want to delete this lesson?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/lessons/${currentPath}/delete/${lessonId}`);
            setLessons(prevLessons => prevLessons.filter(item => item.id !== lessonId));
        } catch (err) {
            console.log('An error occurred: ' + err);
        }
    };

    // Filter lessons based on the search query
    const filteredLessons = lessons.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-lg-5 mt-5 mt-lg-0 _border">
            <h1 className="text-center mt-5 pb-5 mb-md-4 _teacherName">Lessons</h1>
            <div className="row mx-auto">
                <div className="col-md-6 _newlessonF">
                    <form className="mb-5">
                        <input type="text" name="search" className="mx-3 p-2 search_inp" placeholder="Search" value={searchQuery}onChange={handleSearchChange} />
                    </form>
                </div>
                <div className="col-md-6 _newlesson">
                    <form onSubmit={handleAddLesson}>
                        <button type="submit" className="btn_style">Add Lesson</button>
                    </form>
                </div>
            </div>
           
            <div className="row p-4">
                <ul className="lessonsbox m-0 p-0">
                    {filteredLessons.map((item) => (
                        <li className="_mLi m-0 p-0" key={item.id}>
                            <div className="col-12 lesson_li border p-4 rounded m-2 text-success m-3">
                                <div className="row">
                                    <div className="col-6">
                                        <FontAwesomeIcon icon={faBook} />
                                        <Link className="lesson_link mx-1 mx-md-3" to={`/lessons/${currentPath}/${item.id}`}>
                                            <h6 className="_display">{item.title}</h6>
                                        </Link>
                                    </div>
                                    <div className="col-6 teacher_icon_lesson">
                                        <form onSubmit={(e) => handleDeleteLesson(e, item.id)}>
                                            <button type="submit" style={{ outline: 'none', border: 'none' }} className="Dlink bg-light">
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </form>
                                        <Link to={`/lessons/${currentPath}/edit/${item.id}`} className="Elink">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}