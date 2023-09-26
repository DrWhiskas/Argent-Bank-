import React from 'react';
import { Link } from 'react-router-dom';
import '../css/mainNav.css';
export default function NavLogin() {
	return (
		<div className="main-nav">
			<Link className="main-nav-item" to="/login">
				Sign in
			</Link>
		</div>
	);
}
