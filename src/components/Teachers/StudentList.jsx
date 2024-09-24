import{Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './StudentList.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
export default function StudentList(){
    const Students=[
        {
            id:1,
            fullNme:'Ahmad Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'nazilafaizzadah@gmail.come'
        },
        {
            id:2,
            fullNme:'Somia Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:3,
            fullNme:'Ali Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:4,
            fullNme:'Javid Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:5,
            fullNme:'Ahmad Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
           email:'ahmadacbari@gmail.come'
        },
        {
            id:6,
            fullNme:'Somia Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:7,
            fullNme:'Ali Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:8,
            fullNme:'Javid Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:9,
            fullNme:'Ahmad Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
          email:'ahmadacbari@gmail.come'
        },
        {
            id:10,
            fullNme:'Somia Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:11,
            fullNme:'Ali Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
        {
            id:12,
            fullNme:'Javid Akbari',
            gender: 'Male',
            courses:'Front UI&UX',
            email:'ahmadacbari@gmail.come'
        },
    ]
    return(
        <>
        
        <div className="mt-5 pt-5 _overflow">
           <div className="row p-5">
            {Students.map((student)=>(
                <div className="col-md-6 col-lg-3  " key={student.id}>
                    <div className="py-2 px-2 px-md-4 border mb-3 p-relative shadow rounded _hover ">
                    <h3 className="text-success _title">{student.fullNme}</h3>
                  <a href='#' style={{textDecoration:'none'}}><h5 className="text-info ">{student.email}</h5></a>  
                    <h6 className="text-secondary">{student.gender} </h6>
                    <Link to={`/lessons/studentDelete${student.id}`} className='delete_icon '><FontAwesomeIcon icon={faTrashCan} /> </Link>
                    </div>
                </div>
            ))}
           </div>
        </div>
        
        
        </>
    );
}