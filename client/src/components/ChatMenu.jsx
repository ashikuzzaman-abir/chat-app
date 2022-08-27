import React from 'react'
import ChatMenuTopBar from './ChatMenuTopBar'
import ChatMenuCard from './ChatMenuCard'
const fake= [0,1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17]
function ChatMenu() {
  return (
		<div className='h-full w-[20%] '>
			<ChatMenuTopBar />
			<div className='wrapper h-full overflow-y-auto p-1'>
				{fake.map((item, ind) => {
					return <ChatMenuCard key={ind} />;
				})}
			</div>
		</div>
  );
}

export default ChatMenu