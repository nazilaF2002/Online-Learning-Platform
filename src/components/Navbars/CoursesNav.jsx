import logo from '../../images/computer.jpg';
import './HomeNav.css';
import { Link, NavLink } from 'react-router-dom';
import userProfile from '../../images/user_profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome } from '@fortawesome/free-solid-svg-icons';
export default function CoursesNav(){
    return(
    <nav className="navbar   mb-5 navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"rgb(71, 19, 107)"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><img src={logo} alt=""style={{width:"40px",height:"40px",borderRadius:'50%'}} /> Online-Tech</a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark bg-opacity-75 " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online-Tech</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/courses'}><FontAwesomeIcon icon={faHome} /> </NavLink>
          </li>
         
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/courses/profile'}> <img className='image_profile  ' src={userProfile} alt="" />  </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  
    );
}