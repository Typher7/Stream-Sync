import React from 'react';
import { useState } from 'react';
import './navbar.css';
import UploadForm from '../VideoUpload/UploadForm'
import { useNavigate } from 'react-router-dom';

const Navbar = (prop) => {

    const navigate = useNavigate()

    const data = prop.prop
    const handleLogout = data.handleLogout;
    const name = data.userData

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomId, setRoomId] = useState('')

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleRoomChange = (e) => {
        setRoomId(e.target.value)
        console.log(roomId)
    }
    

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (roomId.length === 0) {
            return
        }

        const sendData = {
            roomId: roomId,
            userId: data.userId,
            userName: name
        }

        console.log(data)

        try {
            const response = await fetch('/api/room/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendData)
            })

            if (response.ok) {
                const res = await response.json()
                const videoId = res.videoId
                navigate(`/video/${videoId}/${roomId}`)

            } else {
                const res = await response.json()
                console.log(res)
            }
        }
        catch (error) {
            console.log("Failed to join room: ", error)
        }

    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <p className='title'>SyncFlix</p>
            </div>
            <div className="navbar-right">
                <form className="join_room" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter room ID" value={roomId} className='join_input' onChange={handleRoomChange} />
                    <button className='join_button'>Join</button>
                </form>
                
                <button onClick={openModal}>Upload Video</button>
                <button className="logout_button user" onClick={handleLogout}>
                    Logout
                </button>
                <div className="user_name">
                    {name}
                </div>
            </div>
            {isModalOpen && <UploadForm onClose={closeModal} />}
        </div>
    );
};

export default Navbar;
