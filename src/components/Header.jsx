import React from 'react';
import Logo from './Logo';
import NavLogin from './NavLogin';
import '../css/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useEffect, useState } from 'react';
export default function Header() {

	

	async function GetToken(){
		const token = useSelector((state) => state.login.token);
		console.log(token);
		let response
		try{
			response = await fetch('http://localhost:3001/api/v1/user/profile', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
			})
			.then((response) => response.json())
			.then((data) =>{
				console.log(data.body.token);
			})
		} catch(error){
			console.error(error);
		}
	}
	GetToken()


	return (
		<nav className="main-nav">
			<Logo />
			<NavLogin />
		</nav>
	);
}
