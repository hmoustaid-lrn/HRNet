import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Home from "./pages/Home";
import ListEmployees from "./pages/ListEmployees";

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter basename="HRNet">
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/list-employees" element={<ListEmployees />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;