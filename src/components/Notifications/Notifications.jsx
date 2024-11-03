 import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useTokenCheck from "../useTokenCheck";

export default function Notifications({ setNotificationCount }) {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
    const [notifications, setNotifications] = useState([]);
    const navigate = useNavigate();
    useTokenCheck();

    useEffect(() => {
        const getNotifications = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get(`https://back-end-pffp.onrender.com/lessons/${currentPath}/notification`, {
                    // const response = await axios.get(`http://localhost:5000/lessons/${currentPath}/notification`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setNotifications(response.data);
                    setNotificationCount(response.data.length); // Update the badge count
                } else {
                    navigate('/login');
                }
            } catch (err) {
                console.log('Notification error:', err);
            }
        };

        getNotifications();
    }, [currentPath, setNotificationCount, navigate]);

    return (
        <div className="mt-3 pt-5" style={{ direction: 'rtl', overflow: 'hidden', minHeight: '100vh' }}>
            <div className="row border" style={{ minHeight: '100vh' }}>
                <div className="col-md-6 col-lg-4 p-5 h-100" style={{ direction: 'ltr' }}>
                    <ul style={{ listStyleType: 'none' }}>
                        {notifications.map((item) => (
                            <li key={item.id}>
                                <h6 className="text-danger">{item.teacher_name}</h6>
                                <p className="text-secondary">{item.lesson_title} is available</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 col-lg-8 d-none d-md-inline-block bg-secondary bg-opacity-10" style={{ minHeight: '100vh' }}></div>
            </div>
        </div>
    );
}