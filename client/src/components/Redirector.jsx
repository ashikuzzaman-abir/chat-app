import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirector({ to }) {
	const Navigator = useNavigate();
	useEffect(() => {
		Navigator(to);
	}, []);
}

export default Redirector;
