import React, { useState } from 'react';
import '../css/signin.css';
import Icon from '../img/profilIcon.png'
import { useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useNavigate } from 'react-router-dom';

export default function LonginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// useState :
	const [username, setUsename] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	async function handleLogin() {
		if (!username || !password) {
			return 0;
		} else {
			// creation de l'objet userData
			const userData = {
				email: username,
				password: password,
			};
			let response;
			try {
				// post api
				response = await fetch('http://localhost:3001/api/v1/user/login', {
					method: 'POST',
					body: JSON.stringify(userData),
					headers: {
						'Content-type': 'application/json',
					},
				}).then((data) => data.json());
			} catch (error) {
				return error;
			}
			dispatch(setToken(response.body.token));
			navigate('/user');
		}
	}
	return (
		<section className="sign-in-content">
			<img className="sign-in-content-icon" src={Icon} alt="profil icon" />
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
