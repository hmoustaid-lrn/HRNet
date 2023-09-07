import { configureStore, combineReducers } from "@reduxjs/toolkit";

import employeesReducer from "./employees";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer} from "redux-persist";

const persistConfig = {
	key: "root",
	storage, 
};

const rootReducer = combineReducers({
	employees: employeesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);