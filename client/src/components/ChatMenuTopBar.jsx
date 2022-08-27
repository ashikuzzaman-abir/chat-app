import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function ChatMenuTopBar() {
	return (
		<div className='p-2 h-[60px] flex items-center justify-center'>
			<div className='w-full flex items-center'>
				<input
					className='input-clr-default px-2 py-2 w-[80%] rounded-xl bg-slate-600 text-slate-300 text-[16px]'
					type='text'
					placeholder='Search a conversation'
				/>
				<div className='text-slate-300 text-[36px] w-[20%] flex justify-center items-center'>
					<IoIosAddCircleOutline />
				</div>
			</div>
		</div>
	);
}

export default ChatMenuTopBar;
