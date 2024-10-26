import React, { useRef, useState } from 'react';
import videoPlaceholder from '../../images/videoPlaceholder.jpg';
import './NewLesson.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NewLesson() {
    const [videoSrc, setVideoSrc] = useState(videoPlaceholder);
    const [pdfFile, setPdfFile] = useState(null);
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

    async function hundleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', nameRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('video', videoRef.current.files[0]);
        formData.append('pdf', pdfRef.current.files[0]);

        try {
            const response = await axios.post(`http://localhost:5000/lessons/${currentPath}/new`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log('Response from server:', response.data);

            // Clear form fields
            nameRef.current.value = '';
            descriptionRef.current.value = '';
            videoRef.current.value = null;
            pdfRef.current.value = null;
            setVideoSrc(videoPlaceholder);

            // Navigate to the lessons page
            console.log('Navigating to:', `/lessons/${currentPath}`);
            navigate(`/lessons/${currentPath}`);
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
                    <input type="text" name="title" ref={nameRef} className="form-control" id="title" />
                </div>
                <div className="mb-3 mb-md-5">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea className="form-control" ref={descriptionRef} name="Description" id="Description"></textarea>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 mt-md-3 mb-3 mb-md-0">
                        <label htmlFor="">Upload video</label><br />
                        <input type="file" name='videoUpload' ref={videoRef} onChange={displayThumbnail} required /><br />
                    </div>
                    <div className="col-md-6">
                        <video src={videoSrc} className='w-75 h-100' id="thumbnail" controls></video>
                    </div>
                </div>

                <label htmlFor="">Upload PDF</label><br />
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <input type="file" ref={pdfRef} onChange={handlePdfUpload} required name="pdf" id="" /><br />
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