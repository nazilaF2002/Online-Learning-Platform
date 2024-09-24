import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import teacher1 from '../../images/teacher1.jpg';
import teacher2 from '../../images/teacher2.jpg';
import teacher3 from '../../images/teacher3.jpg';
import teacher4 from '../../images/teacher4.png';
import './Teachers.css'
export default function Teachers(){
  const teachers=[
    {
      id:1,
      name:'Emma Johson',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Placeat mollitia sint tempore pariatur eius distinctio doloribus nesciunt atque!',
      xlogo:<FontAwesomeIcon icon={faX} />,
      linkedinlogo:<FontAwesomeIcon icon={faLinkedin} />,
      githublogo:<FontAwesomeIcon icon={faGithub} />,
      picture:teacher1
    },
    {
      id:2,
      name:'Liam Brown',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Placeat mollitia sint tempore pariatur eius distinctio doloribus nesciunt atque!',
      xlogo:<FontAwesomeIcon icon={faX} />,
      linkedinlogo:<FontAwesomeIcon icon={faLinkedin} />,
      githublogo:<FontAwesomeIcon icon={faGithub} />,
      picture:teacher2
    },
    {
      id:3,
      name:'Olvia Smith',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Placeat mollitia sint tempore pariatur eius distinctio doloribus nesciunt atque!',
      xlogo:<FontAwesomeIcon icon={faX} />,
      linkedinlogo:<FontAwesomeIcon icon={faLinkedin} />,
      githublogo:<FontAwesomeIcon icon={faGithub} />,
      picture:teacher3
    },
    {
      id:4,
      name:'Noah Davis',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit. Placeat mollitia sint tempore pariatur eius distinctio doloribus nesciunt atque!',
      xlogo:<FontAwesomeIcon icon={faX} />,
      linkedinlogo:<FontAwesomeIcon icon={faLinkedin} />,
      githublogo:<FontAwesomeIcon icon={faGithub} />,
      picture:teacher2
    },
  ]
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