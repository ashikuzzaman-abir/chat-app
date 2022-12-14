import React, {useState} from "react";
import fetcher from "../utils/fetcher";
import {useNavigate} from 'react-router-dom';
import config from "../configs/main.config";
import useUser from "../hooks/useUser";
import Loader from "../components/Loader";

const Login = () => {
	const {user, token, setToken, setUser} = useUser();
	const navigator = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [prompt, setPrompt] = useState(null);
	const [loading, setLoading] = useState(false);

	const loginFormSubmitter = async (e) => {
		setLoading(true);
		e.preventDefault();
		const {data, error} = await fetcher(`${config.apiURL}/user/login/`, "POST", {
			username,password
	});
		if (data) {
			// localStorage.setItem("token", data.token);
			// localStorage.setItem("user", JSON.stringify(data.user));
			setUser(data.user)
			setToken(data.token)
			setLoading(false);

			navigator("/", {replace: true});
		}
		if(error) {
			setPrompt("username or password inccorect");
			setLoading(false);
		}
}

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='sm:w-[85%] lg:w-[600px] h-[500px] bg-slate-700 bg-opacity-50 rounded-2xl flex justify-center items-center'>
				<form className='' onSubmit={loginFormSubmitter}>
					<div className='flex flex-col gap-5 justify-center items-center w-full'>
						<input
							className=' sm:min-w-[250px] lg:min-w-[300px] text-slate-900 bg-slate-400 focus:bg-slate-200 rounded-lg text-[18px] px-2 py-1 active:outline-none focus:outline-none font-[500] outline-0 border-none focus:border-solid focus:border-b-mainOrcide border-b-2 placeholder:text-slate-600'
							type='text'
							name='username'
							id='username'
							placeholder='Username'
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className=' sm:min-w-[250px] lg:min-w-[300px] text-slate-900 bg-slate-400 focus:bg-slate-200 rounded-lg text-[18px] px-2 py-1 active:outline-none focus:outline-none font-[500] outline-0 border-none focus:border-solid focus:border-b-mainOrcide border-b-2 placeholder:text-slate-600'
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						{prompt && <p className='w-full text-center text-red-400 gap-0 mt-[-10px] mb-[-10px]'>
							{prompt}
						</p>}
						<div className='flex w-full justify-between '>
							<div className=' self-start '>
								<a href='/acount-recovery'>
									<p className='text-slate-300 hover:text-slate-200'>
										Forget password?
									</p>
								</a>
								<a href='/signup'>
									<p className='text-slate-300 hover:text-slate-200'>
										Doesn't have an account?
									</p>
								</a>
							</div>
							<button
								className=' font-[500] text-[16px] text-white bg-mainOrcide px-6 py-2 rounded-lg hover:bg-opacity-90 min-w-[100px] flex justify-center items-center'
								type='submit'
							>
								{
									!loading ? "Login" : <Loader />
								}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
