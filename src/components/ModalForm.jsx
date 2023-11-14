import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import '../css/modalForm.css'

export default function ModalForm({ closeModal, updateUserData, token }) {
	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');
	const storeToken = useSelector((state) => state.login.token);

	async function handleSubmit(e) {
		e.preventDefault();
        if(!newFirstName || !newLastName ){
            return 0
        }
		const apiUrl = 'http://localhost:3001/api/v1/user/profile';
		try {
			const response = await fetch(apiUrl, {
				method: 'PUT',
				body: JSON.stringify({
					firstName: newFirstName,
					lastName: newLastName,
				}),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${storeToken}`,
				},
			});
			const data = await response.json();
            updateUserData({
                firstName: newFirstName,
                lastName: newLastName
            })
			closeModal();
		} catch (error) {
			return error
		}
	}
	return (
		<section className="modal">
			<div className="modal__content">
				<h2 className="modal__content__title">Edit Name</h2>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="newFirstName">Username</label>
						<input
							type="text"
							id="newFirstName"
							value={newFirstName}
							onChange={(e) => setNewFirstName(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="newLastName">LastName</label>
						<input
							type="text"
							id="newLastName"
							value={newLastName}
							onChange={(e) => setNewLastName(e.target.value)}
						/>
					</div>
					<button type="submit" className="sign-in-button">
						Save Changes
					</button>
					<button onClick={closeModal} className="close">
						Close
					</button>
				</form>
			</div>
		</section>
	);
}
