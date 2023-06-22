export const getAccessToken = () => {
    return localStorage.getItem('access_token') || null;
}

export const setAccessToken = (token) => {
    localStorage.setItem('access_token', token);
}

export const removeAccessToken = () => {
    localStorage.removeItem('access_token')
}
export const setUser = (user) => {
	if (user) {
		localStorage.setItem("user", JSON.stringify(user));
	}
};
export const getUser = () => {
	return localStorage.getItem("user");
};

export const removeUser = () => {
	console.log("remove user");
	localStorage.removeItem("user");
};

export const getCart = () => {
	return JSON.parse(localStorage.getItem("cart"));
};
export const setCart = (cart) => {
	if (cart) {
		localStorage.setItem("cart", JSON.stringify(cart));
	}
};