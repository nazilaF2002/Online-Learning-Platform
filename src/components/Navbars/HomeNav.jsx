import './HomeNav.css';
import { Link, NavLink } from 'react-router-dom';
export default function HomeNav(){
    return(
    <nav className="navbar   mb-5 navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"rgb(71, 19, 107)"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><b>Online-Tech</b></a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online-Tech</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
            <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/'}>Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'login'}>Login</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={`nav-link  ${({ isActive })=>isActive ? 'active':''}`} to={'/register'}>Free Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  
    );
}