import { useState } from 'react';
import logo from '../../images/computer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StudentNav.css';
import './HomeNav.css';
import { Link, NavLink } from 'react-router-dom';
import userProfile from '../../images/user_profile.png';
import uuu from '../../images/teacher1.jpg'
import { faBell, faBookOpen, faComment, faComments, faHome, faHomeAlt, faQuestion, faQuestionCircle, faUser, faUserGear, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons';
export default function StudentNav(){
    const [isTeacher,setTeacher]=useState(true);
    return(
    <nav className="navbar  navbar-dark mb-5 navbar-expand-lg  fixed-top" style={{backgroundColor:"rgb(71, 19, 107)"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><img src={logo} alt=""style={{width:"40px",height:"40px",borderRadius:'50%'}} /> Online-Tech</a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark bg-opacity-75 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online-Tech</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {isTeacher && 
            <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/lessons/students'}><FontAwesomeIcon icon={faUserGroup} /> </NavLink>
          </li>
          }
        <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/lessons/discuss'}><FontAwesomeIcon icon={faComments} /> </NavLink>
          </li>
        <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/lessons/courses'}><FontAwesomeIcon icon={faHomeAlt} /> </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/lessons'}><FontAwesomeIcon icon={faBookOpen} /> </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/lessons/notification'}><FontAwesomeIcon icon={faBell} /> </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/lessons/profile'}> <img className='image_profile  ' src={userProfile} alt="" />   </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  
    );
}