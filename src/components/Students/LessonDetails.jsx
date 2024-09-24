import { useParams} from 'react-router-dom';
import htmlvideo from '../../videos/html.mp4';
import cssvideo from '../../videos/css.mp4';
import JavaScriptvideo from '../../videos/javascript.mp4';
import reactjsvideo from '../../videos/reactjs.MP4';
import './lessonsDetails.css';
import cv from '../../PDF/CV.pdf';
export default function LessonsDetails() {
  const params = useParams();
  const lessonId =params.id; 
    console.log('Lesson ID:', lessonId); 
  const lessons=[
    {
        id:1,
        name:'# Leason 1 Html',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores iste id voluptatem ad quis ullam impedit ipsam, libero minima, fugit in voluptates animi aspernatur odit tempore nulla eum ipsa consequatur tempora eius dolorem culpa? Rerum tenetur animi ratione quibusdam ut accusamus ab! Iure ab corrupti voluptatibus quia ipsum maxime!',
        video:htmlvideo,
        PDF:cv
    },
    {
        id:2,
        name:'# Leason 2 Css',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores iste id voluptatem ad quis ullam impedit ipsam, libero minima, fugit in voluptates animi aspernatur odit tempore nulla eum ipsa consequatur tempora eius dolorem culpa? Rerum tenetur animi ratione quibusdam ut accusamus ab! Iure ab corrupti voluptatibus quia ipsum maxime!',
        video:cssvideo,
        PDF:cv 
    },
    {
        id:3,
        name:'# Leason 3 Javascript',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores iste id voluptatem ad quis ullam impedit ipsam, libero minima, fugit in voluptates animi aspernatur odit tempore nulla eum ipsa consequatur tempora eius dolorem culpa? Rerum tenetur animi ratione quibusdam ut accusamus ab! Iure ab corrupti voluptatibus quia ipsum maxime!',
        video:JavaScriptvideo,
        PDF:cv
    },
    {
        id:4,
        name:'# Leason 4 Reactjs',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores iste id voluptatem ad quis ullam impedit ipsam, libero minima, fugit in voluptates animi aspernatur odit tempore nulla eum ipsa consequatur tempora eius dolorem culpa? Rerum tenetur animi ratione quibusdam ut accusamus ab! Iure ab corrupti voluptatibus quia ipsum maxime!',
        video:reactjsvideo,
        PDF:cv
    },
];

  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));
  if (!lesson) {
    return( <h2 >Lesson not found</h2>
        
    ); 
  }

  return (

    <div className="container p-5 detail_content ">
    <div className="row p-2 p-lg-5  my-auto row_height mt-5" style={{overflow:'hidden'}}>
      <div className="col-lg-6  mb-5 mb-lg-0">
        <h2>{lesson.name}</h2>
        <p className='p-2 mt-3'>{lesson.description}</p>
        <a name='Read_More' href={lesson.PDF} download={'CV'} className='btn btn-info text-white ' >Read More</a>
      </div>
      <div className="col-lg-6 mt-md-5 mt-lg-0 text-center " style={{height:'300px'}}>
        <video src={lesson.video}  typeof='video/mp4' style={{width:'100%',height:'100%',objectFit:'fill',borderRadius:'5%'}} controls></video>
      </div>
    </div>
    </div>
  );
}