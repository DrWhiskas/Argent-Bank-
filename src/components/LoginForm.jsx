import React from "react";
import { Link } from "react-router-dom";
import '../css/signin.css';

export default function LonginForm(){
    return (
			<section className="sign-in-content">
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label for="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label for="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label for="remember-me">Remember me</label>
					</div>
					<Link className="sign-in-button">Sign In</Link>
				</form>
			</section>
		);
}