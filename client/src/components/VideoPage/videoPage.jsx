import { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import VideoPlayer from '../VideoPlayer/videoPlayer';
import './videoPage.css';

const VideoPage = ({ title }) => {

	const {videoId} = useParams()
	
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [userData, setUserData] = useState(null);

	const [userId, setUserId] = useState(null);

	const navigate = useNavigate();

	const handleCreate = async () => {
		const data = {
			videoId: videoId,
			userId: userId,
			userName: userData,
		}
		
		try {
			const response = await fetch('/api/room/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('token'),
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const data = await response.json();
				const roomId = data.roomId;
				navigate(`/video/${videoId}/${roomId}`);
			} else {
				const data = await response.json();
				alert(data.message);
			}
		
		} catch (error){
			console.log("Failed to create room: ", error)
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			// const url = "https://desolate-bayou-93955-64c6896ee0b5.herokuapp.com/api";
			const token = localStorage.getItem('token');

			try {
				const response = await fetch("/api", {
					headers: {
						Authorization: token,
					},
				});

				if (response.ok) {
					const data = await response.json();
					setUserData(data.firstName);
					setUserId(data._id);
					
				} else {
					// Handle unauthorized or other errors
					console.error('Error fetching user data:', response.statusText);
					navigate('/login')

				}
			} catch (error) {
				console.error('Try failed', error);
			}
		}
		fetchData();
	}, []);

	return (
		<>
			<Navbar prop={{ userData, userId, handleLogout }} />
			<div className="sub_nav">
				<div onClick={() => navigate('/')} className="back">
					<i className='bx bx-arrow-back back_arrow'></i>
					<button className='card_button'>Back</button>
				</div>
				<div>
					<button onClick={handleCreate}>Create Room</button>
				</div>
			</div>

			<div>
				<VideoPlayer title={title} />
			</div>
		</>
	)
}

export default VideoPage