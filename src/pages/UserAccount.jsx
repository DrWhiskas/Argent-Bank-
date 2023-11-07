import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankCard from '../components/BankCard';
import '../css/mainBg.css';

import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';


export default function UserAccount() {
	const [ userName, setUserName] = useState('')
	const [ userLastName, setUserLastName] = useState('')

	const dispatch = useDispatch();
	const storeToken = useSelector((state) => state.login.token); //check 
	console.log(storeToken);

	// FETCH API

	const apiUrl = 'http://localhost:3001/api/v1/user/profile'; // Remplacez l'URL par la bonne URL de votre API

	/*fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${storeToken}`,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			// Gérez la réponse ici
			if (data.status === 200) {
				const userProfile = data.body;
				console.log("Profil de l'utilisateur :", userProfile);
			} 
		})
		.catch((error) => {
			console.error("Une erreur s'est produite lors de la requête :", error);
		});
*/
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
						console.log(data.body);
						setUserName(data.body.firstName);
						setUserLastName(data.body.lastName);
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
				<BankCard />
				<BankCard />
				<BankCard />
				<BankCard />
				<BankCard />
				<BankCard />
				<BankCard />
				<BankCard />
			</div>
			<Footer />
		</>
	);
}
