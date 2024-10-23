import './RigesterForm.css';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
    let emailRef = useRef();
    let passwordRef = useRef();
    const [errorMsg, setErrorMsg] = useState('');

    async function hundleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('username', emailRef.current.value);
        formData.append('password', passwordRef.current.value);

        try {
            const response = await axios.post('http://localhost:5000/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                // Redirect based on user type
                if (response.data.userType === 'student') {
                    window.location.href = '/courses';
                } else if (response.data.userType === 'teacher') {
                    const teacherId = response.data.teacherId; // Get the teacher ID
                    // Redirect based on teacher ID
                    if (teacherId === 5) {
                        window.location.href = '/lessons/front';
                    } else if (teacherId === 6) {
                        window.location.href = '/lessons/backend';
                    } 
                    else if(teacherId === 7){
                      window.location.href = '/lessons/uiux';
                    }
                    else if(teacherId === 8){
                      window.location.href = '/lessons/graphic';
                    }
                }
            } 
        } catch (err) {
            console.log('login err', err);
            if (err.response && err.response.data.error) {
                setErrorMsg(err.response.data.error); // Set the error message from the server
            } else {
                setErrorMsg('An unexpected error occurred. Please try again.'); // Fallback error message
            }
        }
    }
    return (
        <div className="p-5 mt-5">
            <div className="container-fluid w-75 w-md-50 mx-auto border border_color p-2 pb-md-5 px-md-5 pt-md-4 rounded">
                <h3 className="text-center mb-4 _teacherName" style={{ color: 'rgb(68, 90, 74)' }}>
                    Welcome Back!
                </h3>
                {/* Error message display */}
                {errorMsg && (
                    <div className="alert alert-danger alert-dismissible p-2 fade show" role="alert">
                        {errorMsg}
                    </div>
                )}
                <form onSubmit={hundleSubmit}>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="username" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn w-100 text-center" id="submit_btn_color">Submit</button>
                </form>
            </div>
        </div>
    );
}