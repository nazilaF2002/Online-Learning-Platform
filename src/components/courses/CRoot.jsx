import { Outlet } from "react-router-dom";
import CoursesNav from "../Navbars/CoursesNav";

export default function CRoot(){
    return(
        <>
          <CoursesNav/>
          <Outlet/>
        </>
    );
}