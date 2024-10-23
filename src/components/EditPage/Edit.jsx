import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams ,useNavigate, Link} from "react-router-dom";

export default function Edit() {
    let [response, setResponse] = useState({ title: '', description: '', video: '', pdf: '' });
    let [videoSrc, setVideoSrc] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[2];
    const params = useParams();
    const lessonId = params.id;

    useEffect(() => {
        const getLesson = async () => {
            try {
                const result = await axios.get(`http://localhost:5000/lessons/${currentPath}/edit/${lessonId}`);
                setResponse(result.data);
                // Set video source to the existing video path
                setVideoSrc(result.data.video);
                
            } catch (err) {
                console.log('edit section' + err);
            }
        };
        getLesson();
    }, [currentPath, lessonId]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', response.title);
        formData.append('description', response.description);
    
        // Get existing video and pdf paths
        const existingVideoPath = videoSrc; // This should be the existing video path from state
        const existingPdfPath = response.pdf; // Assuming this is the existing path
    
        // Check if new files are uploaded
        const videoFileInput = e.target.querySelector('input[name="videoUpload"]');
        const pdfFileInput = e.target.querySelector('input[name="pdf"]');
        
        // If no new video file is uploaded, retain existing path
        if (videoFileInput.files[0]) {
            formData.append('video', videoFileInput.files[0]);
        } else {
            formData.append('video', existingVideoPath); // Retain existing path
        }
    
        // If no new PDF file is uploaded, retain existing path
        if (pdfFileInput.files[0]) {
            formData.append('pdf', pdfFileInput.files[0]);
        } else {
            formData.append('pdf', existingPdfPath); // Retain existing path
        }
    
        try {
            await axios.put(`http://localhost:5000/lessons/${currentPath}/edit/${lessonId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Optionally, you can redirect or show a success message
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
                        <input type="file" name='videoUpload'  /><br />
                    </div>
                    <div className="col-md-6">
                        <video src={videoSrc} className='w-75 h-100' id="thumbnail" controls></video>
                    </div>
                </div>

                <label htmlFor="">Upload PDF</label><br />
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <input type="file"  name="pdf" /><br />
                    </div>
                    <div className="col-md-6 buttom_direction">
                        <Link to={`/lessons/${currentPath}`} className="btn btn-danger px-4">Cancel</Link>
                        {/* <button type="button" className="btn btn-danger px-4">Cancel</button> */}
                        <button type="submit" className="btn btn-success px-4">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}