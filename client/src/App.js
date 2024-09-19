import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from "./components/Main/main";
import Signup from "./components/SignUp/signup";
import Login from "./components/Login/login";
import VideoPage from "./components/VideoPage/videoPage";
import VideoRoom from "./components/VideoRoom/videoRoom";

function App() {
	const user = localStorage.getItem("token");
	const router = createBrowserRouter(createRoutesFromElements(
		/* Wrap this Root Route to create Router here */
		<Route>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path = "/video/:videoId" element={<VideoPage />} />
			<Route path = "/video/:videoId/:roomId" element={<VideoRoom />} />
		</Route>
	))

	return (
		<RouterProvider router={router} />
	);
}

export default App;