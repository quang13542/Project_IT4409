

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { cartReducer } from "./cartSlice";
import { roomReducer } from "./roomSlice";


export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		room: roomReducer
	},
});
