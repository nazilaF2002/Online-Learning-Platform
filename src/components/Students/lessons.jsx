import { faClipboardQuestion, faDeleteLeft, faEdit, faRecycle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import htmlvideo from '../../videos/html.mp4';
import cssvideo from '../../videos/css.mp4';
import JavaScriptvideo from '../../videos/javascript.mp4';
import reactjsvideo from '../../videos/reactjs.MP4';
import cv from '../../PDF/CV.pdf';
import './Lessons.css'
export default function Lessons(){
    const navigate = useNavigate();
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
            name:'# Leason 3 JS',
            description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores iste id voluptatem ad quis ullam impedit ipsam, libero minima, fugit in voluptates animi aspernatur odit tempore nulla eum ipsa consequatur tempora eius dolorem culpa? Rerum tenetur animi ratione quibusdam ut accusamus ab! Iure ab corrupti voluptatibus quia ipsum maxime!',
            video:JavaScriptvideo,
            PDF:cv
        },
        {
            id:4,
            name:'# Leason 4 React',
            description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores iste id voluptatem ad quis ullam impedit ipsam, libero minima, fugit in voluptates animi aspernatur odit tempore nulla eum ipsa consequatur tempora eius dolorem culpa? Rerum tenetur animi ratione quibusdam ut accusamus ab! Iure ab corrupti voluptatibus quia ipsum maxime!',
            video:reactjsvideo,
            PDF:cv
        },
    ];
    const handleAddLesson = (e) => {
        e.preventDefault();
        navigate('/lessons/new'); // Navigate to the New Lesson page
    };
    return(
        
        <div className="p-lg-5 mt-5 mt-lg-0 _border">
             <h1 className="text-center mt-5 pb-5 mb-md-4 _teacherName">Lessons</h1>
            <div className="row  mx-auto">
                <div className="col-md-6   _newlessonF ">
            <form action="" className="mb-5 ">
                <input type="text" name="search" className="mx-3 p-2 search_inp" placeholder="search" />
            </form>
                </div>
                <div className="col-md-6 _newlesson ">
                    <form onSubmit={handleAddLesson} method="">
                    <button type="submit" name="NewLesson" value='Add Lesson' className="btn_style" >Add Lesson</button>
                    </form>
                </div>
            </div>
           
           
            <div className="row p-4">
                <ul className="lessonsbox m-0 p-0">
                {
                    lessons.map((item)=>{
                        return(
                        <li className="_mLi m-0 p-0" key={item.id}>
                           <div className="col-12 lesson_li border p-4 rounded m-2 text-success m-3">
                            <div className="row">
                                <div className="col-6 ">
                                <FontAwesomeIcon icon={faBook}/> 
                             <Link className="lesson_link mx-1 mx-md-3" to={`/lessons/${item.id}`}><h6 className="_display">{item.name}</h6></Link>
                                </div>
                                <div className="col-6 teacher_icon_lesson">
                                    <Link to={`/lessons/delete${item.id}`} className="Dlink"><FontAwesomeIcon  icon={faTrashCan}/></Link>
                                    <Link to={`/lessons/edit${item.id}`} className="Elink"><FontAwesomeIcon icon={faEdit} /></Link>
                                </div>
                            </div>
                            

                            </div>
                        </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    );
}
