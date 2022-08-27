import React from 'react'
import {AiFillInfoCircle} from 'react-icons/ai'
function ChatBoxTopBar({profilePicture, name}) {
  return (
		<div className=' w-[80%] h-[60px] bg-mainDarkBg flex items-center p-2 justify-between fixed top-0 z-40'>
			<div className='flex items-center gap-4'>
				<img
					className='rounded-full w-[50px] h-[50px] object-cover object-center'
					src='https://static.spotboye.com/uploads/Aaliyah-Kashyap_2021-6-9-9-11-2_thumbnail.jpg'
					alt=''
				/>
                <h1 className=' text-slate-200 font-[500] text-[24px]'>Ashikuzzaman Abir</h1>
			</div>
			<div className='flex justify-center items-center text-slate-200 text-[30px] '>
				<AiFillInfoCircle />
			</div>
		</div>
  );
}

export default ChatBoxTopBar