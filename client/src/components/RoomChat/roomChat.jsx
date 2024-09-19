import React, { useState, useEffect } from 'react';
import './roomChat.css';


const RoomChat = ({ roomId, socket }) => {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);


	useEffect(() => {

		// Set up event listeners for incoming messages
		socket.on('message', (message) => {
			console.log(message)
			setMessages((prevMessages) => [...prevMessages, message]);
		});

		// Clean up event listeners on component unmount
		return () => {
			
		};
	}, [roomId]);

	const handleSendMessage = () => {
		if (message.trim() !== '') {
			// Emit a chatMessage event to the server
			socket.emit('chatMessage', { roomId, message });
			setMessage('');
		}
	};

	return (
		<div className="room-chat">
			<div className="chat-messages">
				{messages.map((msg, index) => (
					<div key={index} className="message">
						<span className="room_user">{msg.user}:</span> {msg.message}
					</div>
				))}
			</div>
			<div className="chat-input">
				<input
					type="text"
					placeholder="Type your message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button onClick={handleSendMessage}>Send</button>
			</div>
		</div>
	);
};

export default RoomChat;
