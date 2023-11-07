import React from 'react';
import Logo from './Logo';
import NavLogin from './NavLogin';
import '../css/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useEffect, useState } from 'react';
export default function Header() {

	

	async function getToken(){
		const token = useSelector((state) => state.login.token);
		console.log(token);
		let response
		try{
			response = await fetch('http://localhost:3001/api/v1/user/profile', {
				method: ''
			})
		}

	}



	return (
		<nav className="main-nav">
			<Logo />
			<NavLogin />
		</nav>
	);
}
