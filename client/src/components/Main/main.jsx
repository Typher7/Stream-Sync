import { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import {useNavigate} from "react-router-dom";
import './main.css'

import React from 'react';
import VideoCard from '../VideoCard/videoCard';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [userData, setUserData] = useState(null);

	const [uploadedVideos, setUploadedVideos] = useState([]);

	const [userId, setUserId] = useState(null);

	const navigate = useNavigate();

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
					setUploadedVideos(data.videos)
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
	}, [])


	return (
		<>
			<Navbar prop={{ userData, userId, handleLogout }} />

			<div className="cards_container">
				{uploadedVideos.length !== 0 ? uploadedVideos.map((video) => (
					<VideoCard key={video.filename} title={video.title} filename={video.filename} videoId = {video.videoId}/>
				)): <h1>No videos uploaded</h1>}
			</div>


		</>


	);
};

export default Main;