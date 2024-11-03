import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './profile.css';
import useTokenCheck from '../useTokenCheck';

export default function Profile() {
    const [imgSrc, setImgSrc] = useState(''); 
    const [profileImage, setProfileImage] = useState(null); 
    const [studentPro, setStudentPro] = useState(null); 
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const currentPath = location.pathname.split('/')[2];
    useTokenCheck();

    useEffect(() => {
        const getProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`https://back-end-pffp.onrender.com/lessons/${currentPath}/profile`, {
                // const response = await axios.get(`http://localhost:5000/lessons/${currentPath}/profile`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setStudentPro(response.data);
                const imageUrl = response.data.profileimg.startsWith('http') 
                    ? response.data.profileimg 
                    : `https://back-end-pffp.onrender.com${response.data.profileimg}`; 
                    // : `http://localhost:5000${response.data.profileimg}`; 
                setImgSrc(imageUrl);
            } catch (error) {
                console.error('Error fetching student data:', error);
            } finally {
                setLoading(false);
            }
        };
        getProfile();
    }, [currentPath]);

    const displayThumbnail = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImgSrc(e.target.result); 
            };
            reader.readAsDataURL(file);
            setProfileImage(file);
        } else {
            setProfileImage(null);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentPro(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData();
        
        if (profileImage) {
            formData.append('profileImg', profileImage);
        }
        formData.append('fname', studentPro.fname);
        formData.append('lname', studentPro.lname);

        try {
            await axios.put(`https://back-end-pffp.onrender.com/lessons/${currentPath}/profile`, formData, {
            // await axios.put(`http://localhost:5000/lessons/${currentPath}/profile`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error.message);
            alert('Failed to update profile.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!studentPro) return <div>No profile data available.</div>;

    return (
        <div className="container mt-5 py-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-5">
                        <img src={imgSrc} className='mb-5 _IMG' style={{ width: '250px', height: '250px', borderRadius: '50%' }} alt="Profile" />
                        <div className="photo_change">
                            <label><h6>Change Photo:</h6></label>
                            <input type="file" onChange={displayThumbnail} name="profileImg" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className='mb-md-4 _title'>Manage Your Account</h3>
                        <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="fname" name='fname' value={studentPro.fname} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lname" name='lname' value={studentPro.lname} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn w-100 text-center" id='submit_btn_color'>Save Changes</button>
                    </div>
                </div>
            </form>
        </div>
    );
}