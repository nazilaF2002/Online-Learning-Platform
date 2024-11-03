import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StudentNav.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { faBell, faBookOpen, faComments, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';

export default function StudentNav() {
    const [isTeacher, setTeacher] = useState(true);
    const [img, setImg] = useState('');
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`https://back-end-pffp.onrender.com/lessons/${currentPath}/profile`, {
                // const response = await axios.get(`http://localhost:5000/lessons/${currentPath}/profile`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const decodedToken = jwtDecode(token);
                const username = decodedToken.username;
                setImg(response.data.profileimg);
                const teacherEmails = [
                    'emmajohson@gmail.com',
                    'liambrown@gmail.com',
                    'olviasmith@gmail.com',
                    'noahdavis@gmail.com'
                ];
                setTeacher(teacherEmails.includes(username));
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchCourses();
    }, [currentPath]);

    return (
        <nav className="navbar navbar-dark mb-5 navbar-expand-lg fixed-top" style={{ backgroundColor: "rgb(71, 19, 107)" }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    <b>Online-Tech</b>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online-Tech</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {isTeacher && (
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/students`}>
                                        <FontAwesomeIcon icon={faUserGroup} />
                                    </NavLink>
                                </li>
                            )}
                            {!isTeacher && 
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/courses`}>
                                        <FontAwesomeIcon icon={faHome} />
                                    </NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}`}>
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/notification`}>
                                    <FontAwesomeIcon icon={faBell} />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/profile/1`}>
                                    <img className='image_profile' src={`https://back-end-pffp.onrender.com${img}`} alt="" />
                                    {/* <img className='image_profile' src={`http://localhost:5000${img}`} alt="" /> */}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}