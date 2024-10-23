import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Notifications(){
    const location=useLocation();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
    const [Notification,setNotification]=useState([]);
    useEffect(() => {
        const getNotifications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/lessons/${currentPath}/notification`);
                setNotification(response.data);
            } catch (err) {
                console.log('Notification error:', err);
            }
        };

        getNotifications();
    }, [currentPath]);
    return(
        <>
        <div className=" mt-3  pt-5" style={{direction:'rtl',overflow:'hidden',minHeight:'100vh'}}>
           <div className="row border " style={{minHeight:'100vh'}}>
            <div className="col-md-6     col-lg-4 p-5 h-100" style={{direction:'ltr'}}>
              <ul style={{listStyleType:'none'}}>
                { 
                  Notification.map((item)=>(
                        <li key={item.id}>
                            <h6 className="text-danger">{item.teacher_name}</h6>
                            <p className="text-secondary">{item.lesson_title} is available</p>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div className=" col-md-6   col-lg-8 d-none d-md-inline-block bg-secondary bg-opacity-10 " style={{minHeight:'100vh'}}></div>
           </div>
        </div>
        </>
    );
}