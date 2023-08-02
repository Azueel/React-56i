import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterScreen } from '../auth/pages/RegisterScreen';
import { HomeScreen } from '../home/HomeScreen';

export const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="/" element={<HomeScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
