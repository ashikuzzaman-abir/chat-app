import "./App.css";

import useUser from "./hooks/useUser";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import Messenger from "./pages/Messenger";
import Redirector from "./components/Redirector";

function App() {
	const navigator = useNavigate();
	const user = useSelector((state) => state.user.data);
	return (
		<div className='App bg-mainDarkBg min-h-[100vh]'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/signup'
					element={user? <Redirector to="/m"/> : <Register />}
				/>
				<Route path='/m' element={user? <Messenger /> : <Redirector to='/login'/>} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
