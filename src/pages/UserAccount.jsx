import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankCard from '../components/BankCard';
import '../css/mainBg.css';

import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/store';


export default function UserAccount() {
	const dispatch = useDispatch();
	dispatch(setToken('test'));
	const storeToken = useSelector((state) => state.login.token); //check 
	console.log(storeToken);
	return (
		<>
			<Header />
			<div className="main bg-dark">
				<div className="header">
					<h1>
						Welcome back
						<br />
						Tony Jarvis!
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
