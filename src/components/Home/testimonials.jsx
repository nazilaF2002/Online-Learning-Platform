import student1 from '../../images/student1.jpg';
import student2 from '../../images/student2.jpg';
import student3 from '../../images/student3.jpg';
import student4 from '../../images/student4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './testimonial.css'
import { faComments } from '@fortawesome/free-solid-svg-icons';
export default function Testimonials(){
  
    return(
<>
<h3 className='_title p-4'>Testimonials</h3>
<div id="carouselExample" className="carousel slide bg-secondary bg-opacity-10">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="w-75 mx-auto d-block text-center h-50 p-5">
            <FontAwesomeIcon icon={faComments} style={{height:'100px',color:'orange',marginBottom:'30px'}}/>
             <h3 className='mb-3 _teacherName' style={{color:'purple'}}>Sophia Martinez</h3>
             <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, architecto accusantium non et aut perspiciatis aspernatur impedit tenetur, ad corporis harum magni nam, hic unde libero animi explicabo cumque?</p>
             <img className='img my-4' src={student1} alt="" />
        </div>
    </div>
    <div className="carousel-item  ">
        <div className="w-75 mx-auto d-block text-center h-50 p-5">
            <FontAwesomeIcon icon={faComments} style={{height:'100px',color:'orange',marginBottom:'30px'}}/>
             <h3 className='mb-3  _teacherName' style={{color:'purple'}}>Ethan Wilson</h3>
             <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, architecto accusantium non et aut perspiciatis aspernatur impedit tenetur, ad corporis harum magni nam, hic unde libero animi explicabo cumque?</p>
             <img className='img my-4' src={student2} alt="" />
        
        </div>
    </div>
    <div className="carousel-item ">
        <div className="w-75 mx-auto d-block text-center h-50 p-5">
            <FontAwesomeIcon icon={faComments} style={{height:'100px',color:'orange',marginBottom:'30px'}}/>
             <h3 className='mb-3  _teacherName' style={{color:'purple'}}>Mason Clark</h3>
             <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, architecto accusantium non et aut perspiciatis aspernatur impedit tenetur, ad corporis harum magni nam, hic unde libero animi explicabo cumque?</p>
             <img className='img my-4' src={student4} alt="" />
        
        </div>
    </div>
    <div className="carousel-item ">
        <div className="w-75 mx-auto d-block text-center h-50 p-5">
            <FontAwesomeIcon icon={faComments} style={{height:'100px',color:'orange',marginBottom:'30px'}}/>
             <h3 className='mb-3  _teacherName' style={{color:'purple'}}>Isabella Taylor</h3>
             <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, architecto accusantium non et aut perspiciatis aspernatur impedit tenetur, ad corporis harum magni nam, hic unde libero animi explicabo cumque?</p>
             <img className='img my-4' src={student3} alt="" />
        
        </div>
    </div>
    
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-dark bg-opacity-10" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark bg-opacity-10" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>   
</>   
    );
}