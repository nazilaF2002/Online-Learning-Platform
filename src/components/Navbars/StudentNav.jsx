import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../images/computer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StudentNav.css';
import { NavLink } from 'react-router-dom';
import userProfile from '../../images/user_profile.png';
import { faBell, faBookOpen, faComments, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function StudentNav() {
    const [isTeacher, setTeacher] = useState(true);
    const location = useLocation();

    // Extract the current path segment
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2]; // This assumes the structure is /lessons/{path}/...
    let id=1;
    return (
        <nav className="navbar navbar-dark mb-5 navbar-expand-lg fixed-top" style={{ backgroundColor: "rgb(71, 19, 107)" }}>
            <div className="container-fluid">
                {/* <a className="navbar-brand text-white" href="#">
                    <img src={logo} alt="" style={{ width: "40px", height: "40px", borderRadius: '50%' }} /> Online-Tech
                </a> */}
                <a className="navbar-brand text-white" href="#">
                  <b>Online-Tech</b>  
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark bg-opacity-75" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online-Tech</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/discuss`}>
                                    <FontAwesomeIcon icon={faComments} />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/courses`}>
                                    <FontAwesomeIcon icon={faHome} />
                                </NavLink>
                            </li>
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
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to={`/lessons/${currentPath}/profile/${id}`}>
                                    <img className='image_profile' src={userProfile} alt="" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}