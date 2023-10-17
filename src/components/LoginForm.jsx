import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/signin.css';

import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../features/store';
import login from '../reducers/login.reducer';
import { useNavigate } from 'react-router-dom';
export default function LonginForm() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	
	// useState : 
	const [username, setUsename] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin(){
		if(!username || !password){
			return 0 // faire un message d'erreur ou changer la couleur de la case pour plutard
		}
	}
	function toto(){
		//dispatch(setToken('test'));
		console.log('toto');
		navigate('/user');
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
				<div className="sign-in-button"  onClick={toto}>
					Sign In
				</div>
			</form>
		</section>
	);
}
