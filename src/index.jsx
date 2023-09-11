import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';

import Router from './Router'

import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

import './index.css';


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)