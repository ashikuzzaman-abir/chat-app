import axios from "axios";
export default async function fetcher(url, method='GET', body=null) {
	let data=null, error=null, loading=true;
	try {
		data = await axios({
            url,
            method,
            withCredentials: true,
            headers :{
                'Content-Type': 'application/json'
            },
            data: body
        });
        loading=false;
	} catch (ex) {
		error = ex;
        loading = false;
		console.log(ex);
	}

	return {
		data: data?.data,
		error,
		loading,
	};
}
