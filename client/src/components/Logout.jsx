import React from 'react'
import fetcher from "../utils/fetcher.js";
import config from "../configs/main.config";
import Loader from './Loader.jsx';


function Logout() {
  const [loading, setLoading] = React.useState(false)
  const handleLogout = async(e) => {
    e.preventDefault();
    setLoading(true);
    const {data, error} = await fetcher(`${config.apiURL}/user/logout`)
    if(error) {
      setLoading(false);
      console.log(error);
      return;
    }
    if(data){
      setLoading(false)
      window.localStorage.clear();
      window.location.reload();
    }
  }
  return (
		<div
			className=' cursor-pointer  font-[500] text-[16px] w-fit text-white bg-mainOrcide px-6 py-2 rounded-lg hover:bg-opacity-90 min-w-[100px] flex justify-center items-center'
			onClick={handleLogout}
		>
			{!loading ? "Logout" : <Loader />}
		</div>
	);
}

export default Logout