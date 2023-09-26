import React from 'react';
import Header from '../components/Header';
import LonginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import '../css/mainBg.css';

export default function Login() {
	return (
		<>
			<Header />
			<section className="main bg-dark">
				<LonginForm />
			</section>
			<Footer />
		</>
	);
}
