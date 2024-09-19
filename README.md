<img width="1460" alt="Screenshot 2024-09-01 at 3 07 14 PM" src="https://github.com/user-attachments/assets/3d8bc00b-77d1-4640-88b8-612adb0cb3bf">

# SyncFlix

SyncFlix is a real-time video streaming web application that allows users to create or join a streaming room where everyone can watch videos in sync. It ensures that new users joining the room will start the video from the current playback time, creating a seamless shared viewing experience.





## Features

- **Synchronized Video Playback**: Ensures all users in a room watch the video at the same time.
- **Create and Join Rooms**: Users can create new streaming rooms or join existing ones using a unique room code.
- **Real-Time Chat**: Built-in chat feature for users to communicate while watching.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **User Authentication**: Secure login and registration with unique user profiles.



## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-Time Communication**: Socket.IO
- **Authentication**: JWT
- **Deployment**: Heroku
## Prerequisite Technologies

- Node.js
- npm (Node Package Manager)
- MongoDB
## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ambrose2002/SyncFlix_fullStack.git
   cd SyncFlix_fullStack
    ```
2. **Install client and server dependencies:**
```bash
cd client
npm install
cd ..
cd server
npm install
```

3. **Set up environment variables:**
- Create a .env file in the server directory
- Add your MongoDb URI and other environment variables:
```
ATLAS_URI= your_MongoDB_URI
PORT= available_server_port
SALT= 10
JWTPRIVATEKEY = your_jwt_private_key
```

4. **Run the application:**
- In your server directory
```bash
npm start
```
- In your client directory
```bash
npm start
```

5. **Open the app in your browser:**
```
http://localhost:your_port
```


    
## Usage
<img width="1080" alt="Screenshot 2024-09-01 at 3 08 59 PM" src="https://github.com/user-attachments/assets/57a8af43-810e-40f5-b9f3-f2ac9c27457d">

    1. Start by creating an account
    2. Log in to the account
    3. Upload a video using the video upload button

### Creating a room
    1. Start by playing any of your uploaded videos
    2. Click on Create Room
    3. Copy the Room id
    4. Share Room id with another client

### Joining a room
    1. On the Home page, paste Room Id into the Join Room text box
    2. Click on Join Room



## Contributing

Contributions are always welcome!

   1. Fork the repository.
   2.	Create a new branch (git checkout -b feature/your-feature).
   3.	Make your changes and commit them (git commit -m 'Add new feature').
   4.	Push to the branch (git push origin feature/your-feature).
   5.	Open a pull request.

Please adhere to this project's `code of conduct`.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License


## Contact

For questions or feedback, please contact [Ambrose Blay](mailto:ambrose2002blay@gmail.com.com).
