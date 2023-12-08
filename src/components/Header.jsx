import React from 'react';
import Logo from './Logo';
import profilIcon from '../img/profilIcon.png'
import logoutIcon from '../img/logout.png';
import { Link } from 'react-router-dom';

import '../css/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useEffect, useState } from 'react';
import { logout } from '../features/store';

export default function Header() {
	const dispatch = useDispatch();
	const storeToken = useSelector((state) => state.login.token);
	const [ userName, setUserName ] = useState('')


	const API = 'http://localhost:3001/api/v1/user/profile';
	useEffect(() => {
		async function getToken() {
			if (!storeToken) {
				return 0;
			}
			let response;
			try {
				response = await fetch(API, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${storeToken}`,
					}
				}).then((response) => response.json())
				.then((data)=>{
					console.log(data);
					setUserName(data.body.firstName)
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
				<div className="main-nav-active">
					<Link className="main-nav-item" to="/user">
						<img
							className="main-nav-item-icon"
							src={profilIcon}
							alt="profil icon"
						/>
						{userName}
					</Link>
					<Link className="main-nav-item" to="/login" onClick={disconnection}>
						<img
							className="main-nav-item-icon"
							src={logoutIcon}
							alt="log out icon"
						/>
						Sign out
					</Link>
				</div>
			) : (
				<Link className="main-nav-item" to="/login">
					<img
						className="main-nav-item-icon"
						src={profilIcon}
						alt="profil icon"
					/>
					Sign in
				</Link>
			)}
		</nav>
	);
}
