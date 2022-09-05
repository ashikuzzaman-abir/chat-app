import React from "react";
import Logout from "../components/Logout";

const Home = () => {
	return (
		<div>
			<div className=' flex flex-row bg-slate-200 w-[50vw] h-[100px] items-center'>
				<div className=' bg-red-300 w-20 h-20 content-start'></div>
				<div className=' bg-green-300 w-20 h-20 content-end'></div>
				<div className=' bg-blue-300 w-20 h-20 content-end'></div>
			</div>
			<Logout/>
		</div>
	);
};

export default Home;
