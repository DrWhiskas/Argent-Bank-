import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';

// REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'

const store = configureStore({
	reducer: rootReducer, 
	devTools: true,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/user" element={<UserAccount />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/localisation/:id" element={<Logements />} />
				<Route path="*" element={<Error />} />
*/