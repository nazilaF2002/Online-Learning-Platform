import { Outlet } from "react-router-dom";
import StudentNav from "../Navbars/StudentNav";

export default function SRoot(){
    return(
        <>
          <StudentNav/>
          <Outlet/>
        </>
    );
}