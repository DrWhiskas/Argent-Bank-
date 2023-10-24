import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signin.css';

import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../features/store';
import { useNavigate } from 'react-router-dom';

export default function LonginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// useState :
	const [username, setUsename] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin() {
		if (!username || !password) {
		} else {
			
			dispatch(setToken(username));
			navigate('/user');
		}
	}
	return (
		<section className="sign-in-content">
			<h1>Sign In</h1>
			<form>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsename(e.target.value)}
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<div className="sign-in-button" onClick={handleLogin}>
					Sign In
				</div>
			</form>
		</section>
	);
}
