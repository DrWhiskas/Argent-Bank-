import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankCard from '../components/BankCard';
import '../css/mainBg.css';

import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';
import { useNavigate } from 'react-router-dom';


export default function UserAccount() {
	const navigate = useNavigate();

	const [ userName, setUserName] = useState('')
	const [ userLastName, setUserLastName] = useState('')
	const storesToken = useSelector((state) => state.login.token);
	console.log(localStorage.getItem('token'), 'Perdu');

	const dispatch = useDispatch();
	const storeToken = useSelector((state) => state.login.token); //check 
	console.log(storeToken);

	// FETCH API
	
	const apiUrl = 'http://localhost:3001/api/v1/user/profile';
		useEffect(() =>{
			async function postProfil(){
				try{
					const response = await fetch(apiUrl, {
						method: 'POST', 
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${storeToken}`
						},
					})
					.then((response) => response.json())
					.then((data) =>{
						if(storeToken){
							console.log(data.body);
							setUserName(data.body.firstName);
							setUserLastName(data.body.lastName);
						}else{
							console.log('Token inconnu');
							navigate('/login')
							return 0
						}
						
					})
				} catch(error){
					console.error(error);
				}
			}
			postProfil()
		}, [storeToken])

			return (
				<>
					<Header />
					<div className="main bg-dark">
						<div className="header">
							<h1>
								Welcome back
								<br />
								{userName} {userLastName}
							</h1>
							<button className="edit-button">Edit Name</button>
						</div>
						<BankCard />
					</div>
					<Footer />
				</>
			);
}
