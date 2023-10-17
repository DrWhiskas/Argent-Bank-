import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/signin.css';

import { useDispatch } from 'react-redux';
import login from '../reducers/login.reducer';

export default function LonginForm() {

	const dispatch = useDispatch()

	// useState : 
	const [username, setUsename] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin(){
		if(!username || !password){
			return 0 // faire un message d'erreur ou changer la couleur de la case pour plutard
		}
	}
	


	return (
		<section className="sign-in-content">
			<h1>Sign In</h1>
			<form>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<Link className="sign-in-button" to="/user">
					Sign In
				</Link>
			</form>
		</section>
	);
}
