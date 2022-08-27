import React from "react";

function ChatMenuCard({ name, imageSrc, body, time, id }) {
	return (
		<div
			className={`w-full flex p-2 gap-2 cursor-pointer hover:bg-slate-800 rounded-md`}
		>
			<div className='flex-[1]'>
				<img
					className='rounded-full w-[50px] h-[50px] object-cover object-center'
					src='https://static.spotboye.com/uploads/Aaliyah-Kashyap_2021-6-9-9-11-2_thumbnail.jpg'
					alt='fake profile'
				/>
			</div>
			<div className='flex-[6]'>
				<h1 className=' text-slate-200 text-[16px] capitalize font-[600]'>
					{" "}
					Ashikuzzaman Abir
				</h1>
				<div className='flex justify-between'>
					<p className='text-slate-400 text-[14px] text-ellipsis max-h-[20px] overflow-hidden'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quae harum ipsum illum aliquid natus sunt eum? Vitae
						earum sequi repellat. Ullam doloribus, deleniti
						consequuntur numquam sequi odio incidunt reiciendis
						dicta?
					</p>
					<p className='text-slate-500 pl-1'>3:04pm</p>
				</div>
			</div>
		</div>
	);
}

export default ChatMenuCard;
