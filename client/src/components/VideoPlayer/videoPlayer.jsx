// // VideoPlayer.js

// import React, { useEffect, useRef, useState } from 'react';
// import io from 'socket.io-client';
// import ReactPlayer from 'react-player';
// import { useParams } from 'react-router-dom';

// const VideoPlayer = () => {
// 	const { videoId } = useParams();
// 	const playerRef = useRef(null);
// 	const [isPlaying, setIsPlaying] = useState(false);

// 	useEffect(() => {
// 		const socket = io(`/api/video/${videoId}`);  // Replace with your Express server URL

// 		const playVideo = () => {
// 			setIsPlaying(true);
// 			setTimeout(() => {
// 				setIsPlaying(false);
// 				socket.emit('video_stream', { currentTime: playerRef.current.getCurrentTime() });
// 			}, 50);
// 		};

// 		socket.on('video_frame', (data) => {
// 			playerRef.current.seekTo(data.currentTime);
// 		});

// 		document.getElementById('playButton').addEventListener('click', playVideo);

// 		return () => {
// 			socket.disconnect();
// 			document.getElementById('playButton').removeEventListener('click', playVideo);
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<button id="playButton">Play Video</button>
// 			<ReactPlayer
// 				ref={playerRef}
// 				url={`/api/video/${videoId}`}
// 				playing={isPlaying}
// 				controls={true}
// 				width="100%"
// 				height="auto"
// 				muted
// 				style={{ display: 'none' }}
// 			/>
// 		</div>
// 	);
// };

// export default VideoPlayer;

import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import { useState } from "react";

const VideoPlayer = () => {
	var { videoId } = useParams()
	const [isPlaying, setIsPlaying] = useState(false);

	const playVideo = () => {
		setIsPlaying(!isPlaying);

	};

	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

	const playerConfig = {
		file: {
			attributes: {
				preload: 'auto', // 'auto' will enable buffering
			},
		},
	};



	return (
		// <video id="videoPlayer" controls>
		// 	<source src= {`/api/video/${videoId}`} type="video/mp4" />
		// </video>
		<>
			<button id="playButton" onClick={playVideo}>{isPlaying ? "Pause Video" : "Play Video"}</button>
			{/* <ReactPlayer
				// ref={playerRef}
				url={`/api/video/${videoId}`}
				playing={isPlaying}
				controls={true}
				width="70%"
				height="auto"
				start={3000}
			// muted
			// style={{ display: 'none' }}
			/> */}



			{isSafari ? (
				<video loop autoPlay width="70%" height="auto" start={30} playing={isPlaying} controls={true}>
					<source src={`/api/video/${videoId}`} type="video/mp4" />
					{/* Your browser does not support the video tag. */}
				</video>
			) : (
				<ReactPlayer
					url={`/api/video/${videoId}`}
					playing={isPlaying}
					controls={true}
					width="70%"
					height="auto"
					start={3000}
					config={playerConfig}
				/>
			)}


		</>

	);
};

export default VideoPlayer;

