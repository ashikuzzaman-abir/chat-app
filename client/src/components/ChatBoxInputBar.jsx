import React from 'react'
import {BiSend} from 'react-icons/bi'

function ChatBoxInputBar() {
  return (
		<div className='fixed bottom-0 h-[50px] w-[80%]  flex items-center p-2 justify-around bg-slate-800'>
			<input
				className=' input-clr-default px-2 py-2 w-[95%] rounded-2xl bg-slate-700 text-slate-300 text-[16px]'
				type='text'
				placeholder='Aa'
			/>
			<div className='text-slate-200 text-[32px] hover:scale-125'>
				<BiSend />
			</div>
		</div>
  );
}

export default ChatBoxInputBar