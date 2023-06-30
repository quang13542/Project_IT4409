import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
	name: "room",
	initialState: {},
	reducers: {
		setRooms: (state, payload) => {
			console.log(">>>check room payload: ", payload.payload);
			Object.assign(state, payload.payload);
		},
	},
});

export const { setRooms } = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
