import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
	list: [],
};

export const addEmployeeAction = createAction("employees/add");

export default createReducer(initialState, (builder) =>
	builder.addCase(addEmployeeAction, (draft, action) => {
		draft.list = [...draft.list, action.payload];
		return;
	})
);