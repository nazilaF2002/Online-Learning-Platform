import React, { useRef, useState, useEffect } from 'react';
import videoPlaceholder from '../../images/videoPlaceholder.jpg';
import './NewLesson.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useTokenCheck from '../useTokenCheck';

export default function NewLesson() {
    const [videoSrc, setVideoSrc] = useState(videoPlaceholder);
    const [pdfFile, setPdfFile] = useState(null);
    const [videoError, setVideoError] = useState('');
    const [pdfError, setPdfError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];

    let nameRef = useRef();
    let descriptionRef = useRef();
    let videoRef = useRef();
    let pdfRef = useRef();

    function displayThumbnail(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setVideoSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function handlePdfUpload(event) {
        const file = event.target.files[0];
        if (file) {
            setPdfFile(file);
        }
    }

    useTokenCheck();

    const validateFileType = (file, type) => {
        const allowedTypes = type === 'video' ? ['video/mp4', 'video/avi', 'video/mkv'] : ['application/pdf'];
        if (file && !allowedTypes.includes(file.type)) {
            return `Please upload a valid ${type} file.`;
        }
        return null; 
    };

    async function hundleSubmit(e) {
        e.preventDefault();
        setVideoError('');
        setPdfError('');

        const videoFile = videoRef.current.files[0];
        const pdfFile = pdfRef.current.files[0];

        // Validate file types
        const videoValidationError = validateFileType(videoFile, 'video');
        if (videoValidationError) {
            setVideoError(videoValidationError);
            return;
        }

        const pdfValidationError = validateFileType(pdfFile, 'pdf');
        if (pdfValidationError) {
            setPdfError(pdfValidationError);
            return;
        }

        const formData = new FormData();
        formData.append('title', nameRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('video', videoFile);
        formData.append('pdf', pdfFile);

        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.post(`https://back-end-pffp.onrender.com/lessons/${currentPath}/new`, formData, {
                // const response = await axios.post(`http://localhost:5000/lessons/${currentPath}/new`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log('Response from server:', response.data);

                // Set success message in local storage
                localStorage.setItem('lessonSuccess', "New lesson added successfully!");

                // Clear form fields
                nameRef.current.value = '';
                descriptionRef.current.value = '';
                videoRef.current.value = null;
                pdfRef.current.value = null;
                setVideoSrc(videoPlaceholder);

                // Navigate to the lessons page
                navigate(`/lessons/${currentPath}`);
            } else {
                navigate('/login');
            }
        } catch (err) {
            console.log('An error occurred:', err);
        }
        console.log('Form submitted');
    }

    return (
        <div className="container mt-5 p-5">
            <form onSubmit={hundleSubmit} className='border p-5 rounded shadow newLessoF'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" ref={nameRef} className="form-control" id="title" required />
                </div>
                <div className="mb-3 mb-md-5">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea className="form-control" ref={descriptionRef} name="Description" id="Description" required></textarea>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 mt-md-3 mb-3 mb-md-0">
                        <label htmlFor="">Upload video</label><br />
                        <input type="file" name='videoUpload' ref={videoRef} onChange={displayThumbnail} required /><br />
                        {videoError && <div className="text-danger">{videoError}</div>}
                    </div>
                    <div className="col-md-6">
                        <video src={videoSrc} className='w-75 h-100' id="thumbnail" controls></video>
                    </div>
                </div>

                <label htmlFor="">Upload PDF</label><br />
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <input type="file" ref={pdfRef} onChange={handlePdfUpload} required name="pdf" id="" /><br />
                        {pdfError && <div className="text-danger">{pdfError}</div>}
                    </div>
                    <div className="col-md-6 buttom_direction">
                        <Link to={`/lessons/${currentPath}`} className="btn btn-danger px-3">Cancel</Link>
                        <button type="submit" className="btn btn-success px-4">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}