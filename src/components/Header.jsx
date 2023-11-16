import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

import '../css/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useEffect, useState } from 'react';
import { logout } from '../features/store';

export default function Header() {
	const dispatch = useDispatch();
	const storeToken = useSelector((state) => state.login.token);
	const [userName, setUserName] = useState('');

	if (!storeToken) {
		console.log('token absent');
	} else {
		console.log('token present');
	}
	const API = 'http://localhost:3001/api/v1/user/profile';
	useEffect(() => {
		async function getToken() {
			if (!storeToken) {
				return 0;
			}
			let response;
			try {
				response = await fetch(API, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${storeToken}`,
					}
				})
			} catch (error) {
				console.error(error);
			}
		}
		getToken();
	}, [storeToken]);


	function disconnection() {
		dispatch(logout());
	}

	return (
		<nav className="main-nav">
			<Logo />
			{storeToken ? (
				<>
					<Link to="/user">{userName}</Link>
					<Link className="main-nav-item" to="/login" onClick={disconnection}>
						{userName}oui Sign out
					</Link>
				</>
			) : (
				<Link className="main-nav-item" to="/login">
					Sign in
				</Link>
			)}
		</nav>
	);
}
