import React, { useState } from 'react';
import videoPlaceholder from '../../images/videoPlaceholder.jpg';
import './NewLesson.css'

export default function NewLesson() {
    const [videoSrc, setVideoSrc] = useState(videoPlaceholder);
    const [pdfFile, setPdfFile] = useState(null);

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
    return (
        <>
            <div className="container mt-5 p-5">
                
                <form action="" className='border p-5 rounded shadow newLessoF'>
                    {/* title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" id="title" />
                    </div>
                    {/* description */}
                    <div className=" mb-3 mb-md-5">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <textarea className="form-control" name="Description" id="Description"></textarea>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 mt-md-3 mb-3 mb-md-0">
                            <label htmlFor="">Upload video</label><br />
                            <input type="file" id="imageInput" onChange={displayThumbnail} required /><br />
                        </div>
                        <div className="col-md-6">
                            <video src={videoSrc} className='w-75 h-100' id="thumbnail" controls></video>
                        </div>
                    </div>

                    <label htmlFor="">Upload PDF</label><br />
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                        <input type="file" onChange={handlePdfUpload} required name="pdf" id="" /><br />
                        </div>
                        <div className="col-md-6 buttom_direction">
                        <button type="submit" name="action" value='cancel' className="btn btn-danger px-3">Cancel</button>
                        <button  type="submit" name="action" value='save' className="btn btn-success  px-4">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}