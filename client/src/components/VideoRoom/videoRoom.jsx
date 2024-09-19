import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CustomVideoControls from '../CustomControls/customControls';
import RoomChat from '../RoomChat/roomChat';
import "./videoRoom.css";

const { io } = require("socket.io-client");

const socket = io("http://localhost:3001");


const VideoRoom = () => {
	const { videoId, roomId } = useParams();
	console.log(useParams())

	useEffect(() => {
        socket.emit('joinRoom', roomId);

        // Clean up event listeners on component unmount
        return () => {
            socket.emit('leaveRoom', roomId);
            // socket.disconnect();
        };
    }, [roomId]);


	return (
		<div className='room_grid'>
			<div className="room_video">
				<CustomVideoControls videoSource={`/api/video/${videoId}`} roomId={roomId} socket={socket}/>
			</div>
			<div className="room_chat">
				<RoomChat roomId={roomId} socket={socket}/>
			</div>
		</div>
	);
};

export default VideoRoom;
