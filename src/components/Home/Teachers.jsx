import { teachers } from './teachersData';
import './Teachers.css'
export default function Teachers(){
    return(
        <div className=" py-5">
            <h2 className="text-center mb-md-5 _title">Our Instructors </h2>
            <div className="row p-5 ">
              {
                teachers.map((item)=>{
                  return(
                    <div className="col-md-6 col-lg-3  d-flex justify-content-center align-items-center mb-3" key={item.id}>   
                    <div className="card" style={{width:"18rem"}}>
                    <img src={item.picture} className="card-img-top" alt="..."/>
                     <div className="card-body">
                       <h5 className='_teacherName' style={{color:'rgb(68, 90, 74)'}}>{item.name}</h5>
                       <p className="card-text text-secondary">{item.description} </p>
                       <hr />
                      <a href="#" className='teachers_social_icons m-1 p-2'><i>{item.xlogo}</i> </a>
                       <a href="#" className='teachers_social_icons m-1'>{item.linkedinlogo} </a> 
                       <a href="#" className='teachers_social_icons m-1'>{item.githublogo} </a> 
                  </div>
                 </div>
                  </div>
                  )
                })
              }
            </div>
        </div>
    );
}