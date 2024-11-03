import { Outlet } from "react-router-dom";
import HomeNav from "../Navbars/HomeNav";
import Footer from "../footer/Footer";

export default function HRoot(){
    return(
     
        <div style={{height:'100%'}}>
          <HomeNav/>
          <Outlet/>
        </div>
        
        
    )
}