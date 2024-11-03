import './HomeNav.css';
import { NavLink,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function CoursesNav(){
    const [img,setImg]=useState('');
    const location = useLocation();
    // get the current url path by useing useLocation
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
    let respons;
    useEffect(()=>{
     const fetchCourses = async () => {
         try {
             const token = localStorage.getItem('token');
              respons = await axios.get(`https://back-end-pffp.onrender.com/lessons/${currentPath}/profile`, {
              // respons = await axios.get(`http://localhost:5000/lessons/${currentPath}/profile`, {
                 headers: { 'Authorization': `Bearer ${token}` }
             });
             console.log(respons.data.profileimg);
             setImg(respons.data.profileimg);   
         } catch (error) {
             console.error('Error fetching student data:', error);
         }
     };
     fetchCourses();
    },[])
     
    return(
    <nav className="navbar   mb-5 navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"rgb(71, 19, 107)"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"> <b>Online-Tech</b></a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark bg-opacity-75 " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online-Tech</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/courses'}><FontAwesomeIcon icon={faHome} /> </NavLink>
          </li>
         
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/courses/profile'}> <img className='image_profile  ' src={`http://localhost:5000${img}`} alt="" />  </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  
    );
}