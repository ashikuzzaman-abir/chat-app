import React from "react";
import ChatBox from "../components/ChatBox";
import ChatMenu from "../components/ChatMenu";

function Messenger() {
	return (
		<div className='h-screen w-screen flex overflow-hidden'>
			<ChatMenu />
			<ChatBox />
		</div>
	);
}

export default Messenger;
