import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
	name: "room",
	initialState: {},
	reducers: {
		setProduct: (state, payload) => {
			console.log(">>>check payload: ", payload.payload);
			Object.assign(state, payload.payload);
		},
	},
});

export const { setRoom } = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
