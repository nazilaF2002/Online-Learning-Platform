import computer from '../../images/computer.jpg';
import programming from '../../images/programming.jpg'
import './carousel.css'
export default function Carousel(){
    return(
    <div id="carouselExampleAutoplaying" className="carousel slide p-relative" data-bs-ride="carousel" style={{width:'100%',height:'50%'}}>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={programming} className="d-block w-100" alt="..." style={{width:'100vw',height:'90vh'}}/>
        <div className="overlay text-center">
          <h4 className='text-white text-wrap w-75 _teacherName'>Start a new <u> journey </u>  today with <u>the best</u>  online tutors !</h4>
        </div>
      </div>
      <div className="carousel-item">
        <img src={computer} className="d-block w-100" alt="..." style={{width:'100vw',height:'90vh'}}/>
        <div className="overlay text-center ">
          <h4 className='text-white text-wrap w-75 _teacherName'>Education Opens up the Mind !</h4>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
   
    );
}