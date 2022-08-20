import React from "react";

const Login = () => {
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-[25%] h-[500px] bg-pink-300 rounded-2xl'>
				<form className=''>
					<div className='flex flex-col gap-5 justify-center items-center'>
					<input
						className=' min-w-[250px] rounded-lg text-[24px] px-2 py-1 active:outline-none focus:outline-none outline-0 focus:border-b-black focus:border-3 whitespace-nowrap'
						type='text'
						name='username'
						id='username'
						placeholder='Username'
						required
					/>
					<input
						className=' min-w-[250px] rounded-lg text-[24px] px-2 py-1 active:outline-none focus:outline-none outline-0 focus:border-b-black focus:border-2 whitespace-nowrap'
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						required
					/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
