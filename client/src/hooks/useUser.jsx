import React, { useEffect } from "react";
import _ from "lodash";
import { replaceToken, replaceUser } from "../redux/user.reducer";
import { useDispatch, useSelector } from "react-redux";

function useUser() {
	const userStorage = window.localStorage.getItem("user");
	const tokenStorage = window.localStorage.getItem("token");
	const dispatch = useDispatch();
	// const [user, setUser] = useState(null);
	const user = useSelector((state) => state.user.data);
	const token = useSelector((state) => state.user.token);
	useEffect(() => {
		if (user === null) {
			if (userStorage !== undefined) {
				dispatch(replaceUser(JSON.parse(userStorage)));
			}
		} else {
			if (!_.isEqual(user, JSON.parse(userStorage))) {
				window.localStorage.setItem("user", JSON.stringify(user));
			}
		}
	}, [user]);

	useEffect(() => {
		if (token === null) {
			if (tokenStorage !== undefined && tokenStorage !== "" ) {
				dispatch(replaceToken(tokenStorage));
			}
		} else {
			if (token !== tokenStorage) {
				window.localStorage.setItem("token", token);
			}
		}
	}, [token]);

	return {
		user,
		token,
		setUser: (u) => dispatch(replaceUser(u)),
		setToken: (t) => dispatch(replaceToken(t)),
	};
}

export default useUser;
