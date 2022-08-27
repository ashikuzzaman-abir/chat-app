import React from 'react'

function Message({body, sendFor, time, picture}) {
    const isMyMessage = true;
  return (
		<div className=' w-full flex '>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2'>
					<img
						className='rounded-full w-[40px] h-[40px] object-cover object-center'
						src='https://static.spotboye.com/uploads/Aaliyah-Kashyap_2021-6-9-9-11-2_thumbnail.jpg'
						alt=''
					/>
                    <p className='w-fit bg-gray-700 text-slate-200 rounded-3xl px-4 py-3 text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eum eius blanditiis quaerat tenetur, cupiditate fuga odit accusantium laborum cum rerum possimus earum ducimus magni sit maiores aperiam iusto voluptate.</p>
				</div>
                <p className=' self-end text-slate-400'>3:30pm</p>
			</div>
		</div>
  );
}

export default Message