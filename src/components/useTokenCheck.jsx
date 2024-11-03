import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const useTokenCheck = () => {
    const navigate = useNavigate(); 
    useEffect(() => {
        const tokenCheckInterval = setInterval(() => {
            const token = localStorage.getItem('token');

            if (token) {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('token');
                    navigate('/login'); 
                }
            }
        }, 1000); 
        return () => clearInterval(tokenCheckInterval);
    }, [navigate]);
};

export default useTokenCheck;