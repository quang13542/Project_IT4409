import { createSlice } from "@reduxjs/toolkit";
import { setUser, removeUser } from "../Configs/localStorage";


const userLogined = JSON.parse(localStorage.getItem("user")) || {};

const userSlice = createSlice({
	name: "user",
	initialState: userLogined,
	reducers: {
		loginRedux: (state, payload) => {
			console.log(">>>check payload: ", payload.payload);
			Object.assign(state, payload.payload);
			setUser(payload.payload);
		},
		logout: () => {
			removeUser();
			return {};
		},
	},
});

export const { loginRedux, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
