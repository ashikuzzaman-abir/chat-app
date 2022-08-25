import React from "react";

function NotFound() {
	return (
		<a href="/">
			<div className=' mx-auto h-[100vh] max-w-[1200px] text-white tracking-[3px]'>
				<div className='flex h-full w-full justify-center items-center'>
					<div className=' flex  items-center gap-12'>
						<div className=' text-[72px]'>404</div>
						<div className="flex flex-col justify-start">
							<h1 className='text-[64px] '>Page</h1>
							<h1 className='text-[28px] '>Not Found</h1>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}

export default NotFound;
