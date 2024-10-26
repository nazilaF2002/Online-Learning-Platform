import axios from 'axios';
import './RigesterForm.css';
import { useRef, useState } from 'react';

export default function RegisterForm() {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [gender, setGender] = useState(''); // State to hold selected gender

    async function hundleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('firstName', fnameRef.current.value);
        formData.append('lastName', lnameRef.current.value);
        formData.append('gender', gender); // Use the gender state
        formData.append('username', emailRef.current.value);
        formData.append('password', passwordRef.current.value);

        const selectedCourses = Array.from(document.querySelectorAll('input[name="course"]:checked')).map(checkbox => checkbox.value);
        selectedCourses.forEach(course => formData.append('course', course));

        try {
            const response = await axios.post('http://localhost:5000/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                    // Redirect to /courses on successful login
                    window.location.href = '/courses'; // Or use react-router's useHistory or useNavigate
                  } 
            console.log(response.data.message);
        } catch (err) {
            console.log('RegisterForm err', err);
        }
    }

    return (
        <div className='p-5 mt-5'>
            <div className="w-75 w-md-50 mx-auto border border_color p-2 pb-md-5 px-md-5 pt-md-4 rounded">
                <h3 className="text-center mb-4 _teacherName" style={{ color: 'rgb(68, 90, 74)' }}>
                    Register and start learning!
                </h3>
                <form onSubmit={hundleSubmit}>
                    {/* Full Name */}
                    <div className="mb-3">
                        <label htmlFor="First_Name" className="form-label">First Name</label>
                        <input type="text" ref={fnameRef} className="form-control" id="First_Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Last_Name" className="form-label">Last Name</label>
                        <input type="text" ref={lnameRef} className="form-control" id="Last_Name" />
                    </div>
                    {/* Gender */}
                    <div className="mb-3">
                        <label className="form-label">Gender</label><br />
                        <div className="form-group border rounded p-2 ">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="female"
                                    checked={gender === 'female'} // Set checked based on state
                                    onChange={() => setGender('female')} // Update state on change
                                />
                                <label>Female</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'} // Set checked based on state
                                    onChange={() => setGender('male')} // Update state on change
                                />
                                <label>Male</label>
                            </div>
                        </div>
                    </div>
                    {/* Courses */}
                    <div className="mb-3">
                        <label className="form-label">You can select more than one course</label><br />
                        <div className="form-group border rounded p-2 ">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="course" value="FrontEnd" />
                                <label>Front-End</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="course" value="BackEnd" />
                                <label>Back-End</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="course" value="uiux" />
                                <label>UI & UX</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="course" value="graphic" />
                                <label>Graphic</label>
                            </div>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn w-100 text-center" id='submit_btn_color'>Submit</button>
                </form>
            </div>
        </div>
    );
}