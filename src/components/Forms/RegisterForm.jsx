import axios from 'axios';
import './RigesterForm.css';
import { useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function RegisterForm() {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [gender, setGender] = useState('');
    const [profileImage, setProfileImage] = useState(null); // State for the image file

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value.length < 4) {
            alert('Password must be at least 4 characters long.');
            return;
        }
          // Check if an image is uploaded
    if (!profileImage) {
        alert('Please upload a profile image.');
        return;
    }
        let formData = new FormData();
        formData.append('firstName', fnameRef.current.value);
        formData.append('lastName', lnameRef.current.value);
        formData.append('gender', gender);
        formData.append('username', emailRef.current.value);
        formData.append('password', passwordRef.current.value);
        
        // Append the profile image if it exists
        if (profileImage) {
            formData.append('profileImage', profileImage);
        }

        const selectedCourses = Array.from(document.querySelectorAll('input[name="course"]:checked')).map(checkbox => checkbox.value);
        selectedCourses.forEach(course => formData.append('course', course));
        //  check if at least one course is selected
         if (selectedCourses.length === 0) {
            alert('Please select at least one course.');
            return;
        }
        try {
            const response = await axios.post('https://back-end-pffp.onrender.com/register', formData, {
            // const response = await axios.post('http://localhost:5000/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // when the user registred successfully get their token and check the username if they be teachers 
            // login them to their specific course and if they are students show their selected courses.
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                const token = localStorage.getItem('token');
                    const decodedToken = jwtDecode(token);
                    const username=decodedToken.username;
                    console.log('inside register',username);
                    const redirectMap = {
                        'emmajohson@gmail.com': '/lessons/front',
                        'liambrown@gmail.com': '/lessons/backend',
                        'olviasmith@gmail.com': '/lessons/uiux',
                        'noahdavis@gmail.com': '/lessons/graphic',
                    };
                    window.location.href = redirectMap[username] || '/courses';
               
            } 
            console.log(response.data.message);
           
        } catch (err) {
            if (err.response && err.response.status === 400) {
                alert(err.response.data); // Show error message in an alert
            } else {
                console.error('RegisterForm err', err);
                alert('An unexpected error occurred. Please try again.'); // Generic error message
            }
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file); // Store the selected file
        } else {
            setProfileImage(null); // Reset if no file is selected
        }
    };

    return (
        <div className='p-5 mt-5'>
            <div className="_custom_width mx-auto border border_color p-2 pb-md-5 px-md-5 pt-md-4 rounded">
                <h3 className="text-center mb-4 _teacherName" style={{ color: 'rgb(68, 90, 74)' }}>
                    Register and start learning!
                </h3>
                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-3">
                        <label htmlFor="First_Name" className="form-label">First Name</label>
                        <input type="text" ref={fnameRef} className="form-control" id="First_Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Last_Name" className="form-label">Last Name</label>
                        <input type="text" ref={lnameRef} className="form-control" id="Last_Name" required />
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
                                    checked={gender === 'female'}
                                    onChange={() => setGender('female')}
                                    required
                                />
                                <label>Female</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={() => setGender('male')}
                                    required
                                />
                                <label>Male</label>
                            </div>
                        </div>
                    </div>
                    {/* Profile Image Upload */}
                    <div className="mb-3">
                        <label htmlFor="profileImage" className="form-label">Upload Profile Image</label>
                        <input
                            type="file"
                            id="profileImage"
                            className="form-control"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
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
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" min={4} required />
                    </div>
                    <button type="submit" className="btn w-100 text-center" id='submit_btn_color'>Submit</button>
                </form>
                
            </div>
           
        </div>
    );
}