// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';

// const useTokenCheck = () => {
//     const navigate = useNavigate(); 
//     useEffect(() => {
//         const tokenCheckInterval = setInterval(() => {
//             const token = localStorage.getItem('token');

//             if (token) {
//                 const decodedToken = jwtDecode(token);
//                 const currentTime = Date.now() / 1000;
//                 if (decodedToken.exp < currentTime) {
//                     localStorage.removeItem('token');
//                     navigate('/login'); 
//                 }
//             }
//         }, 1000); 
//         return () => clearInterval(tokenCheckInterval);
//     }, [navigate]);
// };

// export default useTokenCheck;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const useTokenCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            // Initial check for expiration
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                // Set up interval to check token validity every 5 minutes
                const tokenCheckInterval = setInterval(() => {
                    const updatedToken = localStorage.getItem('token');
                    if (updatedToken) {
                        const decodedUpdatedToken = jwtDecode(updatedToken);
                        if (decodedUpdatedToken.exp < currentTime) {
                            localStorage.removeItem('token');
                            navigate('/login');
                        }
                    }
                }, 300000); // 5 minutes

                return () => clearInterval(tokenCheckInterval);
            }
        }
    }, [navigate]);
};

export default useTokenCheck;