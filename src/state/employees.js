import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
	list: [],
};

export const addEmployeeAction = createAction("employees/add");
export const deleteEmployeeAction = createAction("employees/delete");


export default createReducer(initialState, (builder) =>
	builder
		.addCase(addEmployeeAction, (draft, action) => {
			draft.list = [...draft.list, action.payload];
			return;
		})
		.addCase(deleteEmployeeAction, (draft, action) => {
			draft.list = draft.list.filter(itemA => !action.payload.some(itemB => (itemA.firstName === itemB.firstName) && (itemA.lastName === itemB.lastName) && (itemA.dateOfBirth === itemB.dateOfBirth) && (itemA.startDate === itemB.startDate)));
			return;
		})
);