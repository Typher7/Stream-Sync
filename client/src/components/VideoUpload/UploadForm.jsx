import React, { useState } from 'react';
import './uploadForm.css';

const UploadForm = ({ onClose }) => {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoFile, setVideoFile] = useState(null);

    const handleTitleChange = (e) => {
        setVideoTitle(e.target.value);
    };

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', videoTitle);
        formData.append('video', videoFile);
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: token,
                },
            });
            if (response.ok) {
                const res = await response.json();
                console.log(res)
            } else {
                const res = await response.json();
                alert(res.message);
            }
        } catch (error) {
            alert("error uploading video")
        }

        // Clear the form after submission
        setVideoTitle('');
        setVideoFile(null);

        // Close the modal
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Video Title:
                        <input type="text" className='video_title' value={videoTitle} onChange={handleTitleChange} required/>
                    </label>

                    <label>
                        Choose a Video:
                        <input type="file" accept="video/*" onChange={handleFileChange} required/>
                    </label>

                    <button type="submit" className='upload_button'>Upload Video</button>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;
