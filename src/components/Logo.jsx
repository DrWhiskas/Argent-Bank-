import React from 'react';
import { Link } from 'react-router-dom';
import ArgentBankLogo from '../img/argentBankLogo.png';
import '../css/logo.css';

export default function Logo() {
	return (
		<Link className="main-nav-logo" to="/">
			<img
				className="main-nav-logo-image"
				src={ArgentBankLogo}
				alt="Argent Bank logo"
			/>
		</Link>
	);
}
