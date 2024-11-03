import { faEdit, faTrashCan, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import './Lessons.css';
import useTokenCheck from "../useTokenCheck";

export default function Lessons() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const lessonId = params.id;
    let [lessons, setLessons] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");
    let [isTeacher, setTeacher] = useState(true);
    let [userName, setUserName] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationClass, setNotificationClass] = useState('');

    // Extract the current path segment
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];

    const teacherEmails = [
        'emmajohson@gmail.com',
        'liambrown@gmail.com',
        'olviasmith@gmail.com',
        'noahdavis@gmail.com'
    ];

    useTokenCheck();
    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get(`https://back-end-pffp.onrender.com/lessons/${currentPath}`, {
                    // const response = await axios.get(`http://localhost:5000/lessons/${currentPath}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setLessons(response.data);
    
                    // Check for success message in local storage
                    const message = localStorage.getItem('lessonSuccess');
                    if (message) {
                        setNotificationMessage(message);
                        setNotificationClass('show orange'); // Set to show orange notification
                        localStorage.removeItem('lessonSuccess');
                        
                        setTimeout(() => {
                            setNotificationClass('hide');
                            setTimeout(() => {
                                setNotificationMessage('');
                            }, 500);
                        }, 3000);
                    }
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        };
        fetchLessons();
    }, [currentPath, navigate]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const username = decodedToken.username;
                setUserName(username);

                if (teacherEmails.includes(username)) {
                    setTeacher(true);
                } else {
                    setTeacher(false);
                }
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

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
            const token = localStorage.getItem('token');
            await axios.delete(`https://back-end-pffp.onrender.com/lessons/${currentPath}/delete/${lessonId}`, {
            // await axios.delete(`http://localhost:5000/lessons/${currentPath}/delete/${lessonId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setLessons(prevLessons => prevLessons.filter(item => item.id !== lessonId));
    
            // Show notification for successful deletion with red background
            setNotificationMessage('Lesson deleted successfully!');
            setNotificationClass('show error'); // Add 'error' class for red background
            setTimeout(() => {
                setNotificationClass('hide');
                setTimeout(() => {
                    setNotificationMessage('');
                }, 500);
            }, 3000);
        } catch (err) {
            console.log('An error occurred: ' + err);
        }
    };
  const filteredLessons = lessons.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-lg-5 mt-5 mt-lg-0 _border">
            {notificationMessage && (
                <div className={`notification ${notificationClass}`} role="alert">
                    {notificationMessage}
                </div>
            )}
            <h1 className="text-center mt-5 pb-5 mb-md-4 _teacherName">Lessons</h1>
            <div className="row mx-auto">
                <div className="col-md-6 _newlessonF">
                    <form className="mb-5">
                        <input type="text" name="search" className="mx-3 p-2 search_inp" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
                    </form>
                </div>
                {isTeacher && 
                 <div className="col-md-6 _newlesson">
                     <form onSubmit={handleAddLesson}>
                         <button type="submit" className="btn_style">Add Lesson</button>
                     </form>
                 </div>
                }
            </div>
           
            <div className="row p-4 ">
                <ul className="lessonsbox">
                    {filteredLessons.map((item) => (
                        <li  key={item.id}>
                            <div className="col-12  border p-4 rounded my-2 text-success ">
                                <div className="row">
                                    <div className="col-6">
                                        <FontAwesomeIcon icon={faBook} />
                                        <Link className="lesson_link mx-1 mx-md-3" to={`/lessons/${currentPath}/${item.id}`}>
                                            <h6 className="_display">{item.title}</h6>
                                        </Link>
                                    </div>
                                    {isTeacher && 
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
                                    }
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}