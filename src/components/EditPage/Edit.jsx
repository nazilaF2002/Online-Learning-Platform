import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import useTokenCheck from "../useTokenCheck";
export default function Edit() {
    const [response, setResponse] = useState({ title: '', description: '', video: '', pdf: '' });
    const [videoSrc, setVideoSrc] = useState('');
    const [videoError, setVideoError] = useState('');
    const [pdfError, setPdfError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
    const params = useParams();
    const lessonId = params.id;
    useTokenCheck();

    useEffect(() => {
        const getLesson = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const result = await axios.get(`https://back-end-pffp.onrender.com/lessons/${currentPath}/edit/${lessonId}`, {
                    // const result = await axios.get(`http://localhost:5000/lessons/${currentPath}/edit/${lessonId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setResponse(result.data);
                    setVideoSrc(result.data.video);
                } else {
                    navigate('/login');
                }
            } catch (err) {
                console.log('edit section' + err);
            }
        };
        getLesson();
    }, [currentPath, lessonId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const validateFileType = (file, type) => {
        const allowedTypes = type === 'video' ? ['video/mp4', 'video/avi', 'video/mkv'] : ['application/pdf'];
        return file && allowedTypes.includes(file.type);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setVideoError('');
        setPdfError('');
        const formData = new FormData();
        formData.append('title', response.title);
        formData.append('description', response.description);
        const videoFileInput = e.target.querySelector('input[name="videoUpload"]');
        const pdfFileInput = e.target.querySelector('input[name="pdf"]');
        // Validate video file
        if (videoFileInput.files[0]) {
            if (!validateFileType(videoFileInput.files[0], 'video')) {
                setVideoError('Please upload a valid video file (mp4, avi, mkv)');
                return;
            }
            formData.append('video', videoFileInput.files[0]);
        } else {
            formData.append('video', videoSrc); // Retain existing path
        }
    
        // Validate PDF file
        if (pdfFileInput.files[0]) {
            if (!validateFileType(pdfFileInput.files[0], 'pdf')) {
                setPdfError('Please upload a valid PDF file');
                return;
            }
            formData.append('pdf', pdfFileInput.files[0]);
        } else {
            formData.append('pdf', response.pdf); // Retain existing path
        }
        try {
            const token = localStorage.getItem('token');
            await axios.put(`https://back-end-pffp.onrender.com/lessons/${currentPath}/edit/${lessonId}`, formData, {
            // await axios.put(`http://localhost:5000/lessons/${currentPath}/edit/${lessonId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            // Set success message in local storage
            localStorage.setItem('lessonSuccess', 'Lesson updated successfully!');
            navigate(`/lessons/${currentPath}`);
        } catch (err) {
            console.error('Error updating lesson:', err);
        }
    };
    return (
        <div className="container mt-5 p-5">
            <form onSubmit={handleSubmit} className='border p-5 rounded shadow newLessoF'>
                {/* Title */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" value={response.title} onChange={handleChange} className="form-control" id="title" required />
                </div>
                {/* Description */}
                <div className="mb-3 mb-md-5">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={response.description} onChange={handleChange} id="Description" required></textarea>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6 mt-md-3 mb-3 mb-md-0">
                        <label htmlFor="">Upload video</label><br />
                        <input type="file" name='videoUpload' /><br />
                        {videoError && <div className="text-danger">{videoError}</div>}
                    </div>
                    <div className="col-md-6">
                        <video src={`https://back-end-pffp.onrender.com${videoSrc}`} className='w-75 h-100' id="thumbnail" controls></video>
                        {/* <video src={`http://localhost:5000${videoSrc}`} className='w-75 h-100' id="thumbnail" controls></video> */}
                    </div>
                </div>

                <label htmlFor="">Upload PDF</label><br />
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <input type="file" name="pdf" /><br />
                        {pdfError && <div className="text-danger">{pdfError}</div>}
                    </div>
                    <div className="col-md-6 buttom_direction">
                        <Link to={`/lessons/${currentPath}`} className="btn btn-danger px-4">Cancel</Link>
                        <button type="submit" className="btn btn-success px-4">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}