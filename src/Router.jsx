import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Home from "./pages/Home";

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
        <Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;