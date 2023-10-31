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


	async function test(){
		try {
        const response = await fetch('http://localhost:3001');
        if (response.ok) {
            console.log('Connexion à l\'API réussie');
        } else {
            console.log('Échec de la connexion à l\'API');
			console.log(response.status, 'status');
        }
    } catch (error) {
        console.error('Erreur lors de la connexion à l\'API :', error);
    }
	}
	test()

	async function handleLogin() {
		if (!username || !password) {
			// mettre un message qui alerte les user
			return 0
		} else {
			// creation de l'objet userData
			const userData = {
				email: username,
				password: password,
			}
			try{
				// post api 
				const response = await fetch('http://localhost:3001/api/v1/user/login', {
					method: 'POST',
					body: JSON.stringify({
						userData,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				})
				// check si la reponse est bonne
				if(response.ok){
					const data = await response.json();
					dispatch(setToken(data.token))
					navigate('/user');
				}else{
					if(response.status == 400){
						console.log('Error 400: Ivalid Fields');
					}
					else if(response.status == 500){
						console.log('Error 500: Internal Server Error');
					}else{
						console.log('Error ', response.status);
					}
				}
			} catch(error){
				console.error(error);
				return
			}
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
