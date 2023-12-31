import React from 'react';

import '../css/bankCard.css';
import '../css/button.css';

export default function BankCard() {
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title"></h3>
				<p className="account-amount"></p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}
