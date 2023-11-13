import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

import '../css/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useEffect, useState } from 'react';
import { logout } from '../features/store';

export default function Header() {
	const dispatch = useDispatch()
	const storeToken = useSelector((state) => state.login.token);
	const [userData, setUserData] = useState(null);
	console.log(storeToken, 'header');

	const API = 'http://localhost:3001/api/v1/user/profile';
	useEffect(() => {
		async function getToken() {
			if (storeToken) {
				try {
					const response = await fetch(API, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${storeToken}`,
						},
					});
					if(response.ok){
						const data = await response.json();
						if (storeToken) {
							console.log(data);
						}
					}else {
						console.error(response.status, response.statusText);
					}
				} catch (error) {
					console.error(error);
				}
			}
		}
		getToken();
	}, [storeToken]);

	function disconnection(){
		dispatch(logout());
	}

	return (
		<nav className="main-nav">
			<Logo />
			{storeToken ? (
				<Link className="main-nav-item" to="/login" onClick={disconnection}>
					Sign out
				</Link>
			) : (
				<Link className="main-nav-item" to="/login">
					Sign in
				</Link>
			)}
		</nav>
	);
}
