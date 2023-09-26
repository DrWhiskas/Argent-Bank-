import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankCard from '../components/BankCard';
import '../css/mainBg.css';


export default function UserAccount() {
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
