import { useParams} from 'react-router-dom';
import './lessonsDetails.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
export default function LessonsDetails() {
  const location = useLocation();
    let [lessons,setLessons]=useState([]);
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
   useEffect(() => {
       const fetchLessons = async () => {
           try {
               const response = await axios.get(`http://localhost:5000/lessons/${currentPath}`);
               setLessons(response.data);
           } catch (error) {
               console.error('Error fetching student data:', error);
           }
       };
       fetchLessons();
   }, []);
  
  const params = useParams();
  const lessonId =params.id; 
    console.log('Lesson ID:', lessonId); 

  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));
  if (!lesson) {
    return( <h2 >Lesson not found</h2>
        
    ); 
  }

  return (

    <div className="container p-5 detail_content ">
    <div className="row p-2 p-lg-5  my-auto row_height mt-5" style={{overflow:'hidden'}}>
      <div className="col-lg-6  mb-5 mb-lg-0">
        <h2>{lesson.title}</h2>
        <p className='p-2 mt-3'>{lesson.description}</p>
        <a name='Read_More' href={lesson.PDF} download={'CV'} className='btn btn-info text-white ' >Read More</a>
      </div>
      <div className="col-lg-6 mt-md-5 mt-lg-0 text-center " style={{height:'300px'}}>
        <video src={`http://localhost:5000/${lesson.video}`}  typeof='video/mp4' style={{width:'100%',height:'100%',objectFit:'fill',borderRadius:'5%'}} controls></video>
      </div>
    </div>
    </div>
  );
}