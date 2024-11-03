import './RigesterForm.css';
import { useRef, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorMsg, setErrorMsg] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', emailRef.current.value);
        formData.append('password', passwordRef.current.value);
        try {
            const response = await axios.post('https://back-end-pffp.onrender.com/login', formData, {
            // const response = await axios.post('http://localhost:5000/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                const token = localStorage.getItem('token');
                const decodedToken = jwtDecode(token);
                const username=decodedToken.username;
                const redirectMap = {
                    'emmajohson@gmail.com': '/lessons/front',
                    'liambrown@gmail.com': '/lessons/backend',
                    'olviasmith@gmail.com': '/lessons/uiux',
                    'noahdavis@gmail.com': '/lessons/graphic',
                };
                window.location.href = redirectMap[username] || '/courses'; 
            }
        } catch (err) {
            console.log('Login error', err);
            if (err.response && err.response.data.error) {
                setErrorMsg(err.response.data.error); // Set the error message from the server
            } else {
                setErrorMsg('An unexpected error occurred. Please try again.'); // Fallback error message
            }
        }
    }
    return (
        <div className="p-5 mt-5">
            <div className="  container-fluid w-75 w-md-50 mx-auto border border_color p-2 pb-md-5 px-md-5 pt-md-4 rounded">
                <h3 className="text-center mb-4 _teacherName" style={{ color: 'rgb(68, 90, 74)' }}>
                    Welcome Back!
                </h3>
                {/* Error message display */}
                {errorMsg && (
                    <div className="alert alert-danger alert-dismissible p-2 fade show" role="alert">
                        {errorMsg}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="username" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="btn w-100 text-center" id="submit_btn_color">Submit</button>
                </form>
            </div>
        </div>
    );
}