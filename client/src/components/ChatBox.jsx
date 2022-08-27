import React from "react";
import ChatBoxInputBar from "./ChatBoxInputBar";
import ChatBoxTopBar from "./ChatBoxTopBar";
import Message from "./Message";
const fake = [0,1,2,3,4,5,6,7,8,9,10]
function ChatBox() {
	return (
		<div className='h-full bg-slate-800 w-[80%]'>
			<ChatBoxTopBar />
			<div className='relative wrapper w-full top-[60px] p-3 h-[calc(100vh-110px)] overflow-y-auto flex flex-col gap-3'>
				{fake.map((each, ind) => {
					return <Message key={ind} />;
				})}
        
			</div>
			<ChatBoxInputBar />
		</div>
	);
}

export default ChatBox;
