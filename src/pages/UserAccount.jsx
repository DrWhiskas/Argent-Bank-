import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankCard from '../components/BankCard';
import ModalForm from '../components/ModalForm';
import '../css/mainBg.css';

import { useSelector, useDispatch } from 'react-redux';
import store, { setToken } from '../features/store';
import { useNavigate } from 'react-router-dom';


export default function UserAccount() {
	const navigate = useNavigate();

	const [ userName, setUserName] = useState('')
	const [ userLastName, setUserLastName] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(0)

	function openModal(){
		setIsModalOpen(true)
		console.log('oui');
	}
	function closeModal(){
		setIsModalOpen(false)
	}
	function updateUserData(newData){
		setUserLastName(newData.lastName)
		setUserName(newData.firstName)
	}

	const dispatch = useDispatch();
	const storeToken = useSelector((state) => state.login.token); //check 

	// FETCH API
	const apiUrl = 'http://localhost:3001/api/v1/user/profile';
		useEffect(() =>{
			async function postProfil(){
				if(!storeToken){
					return 0
				}
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
							setUserName(data.body.firstName);
							setUserLastName(data.body.lastName);
						}else{
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
							<button className="edit-button" onClick={openModal}>
								Edit Name
							</button>
						</div>
						<BankCard />
					</div>
					<Footer />

					{isModalOpen && (
						<ModalForm
							closeModal={closeModal}
							updateUserData={updateUserData}
							token={storeToken}
						/>
					)}
				</>
			);
}
