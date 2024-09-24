import { Outlet } from "react-router-dom";
import HomeNav from "../Navbars/HomeNav";
import Footer from "../footer/Footer";
import Lessons from "../Students/lessons";
import LessonsDetails from "../Students/LessonDetails";

export default function HRoot(){
    return(
        <>
          <HomeNav/>
          <Outlet/>
          <Footer/>
        </>
    )
}