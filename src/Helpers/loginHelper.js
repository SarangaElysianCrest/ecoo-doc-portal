import { userRoles } from "./constants";

export const updateRole = (email, password, store, setStore) => {
	if (email == "ad.user@demo.com") {
		setStore({ ...store, role: userRoles.ad, userID: 2 });
		return true;
	} else if (email == "dg.user@demo.com") {
		setStore({ ...store, role: userRoles.dg, userID: 3 });
		return true;
	} else if (email == "cro.user@demo.com") {
		setStore({ ...store, role: userRoles.cro, userID: 1 });
		return true;
	}
	return false;
};

export const getUserIDFromLocal = () => {
	try {
		let store = window.localStorage.getItem("STORE");
		return JSON.parse(store).userID;
	} catch (error) {
		console.log(error);
	}
};

export const getUserRoleFromLocal = () => {
	try {
		let store = window.localStorage.getItem("STORE");
		return JSON.parse(store).role;
	} catch (error) {
		console.log(error);
	}
};

export const logOutClearLocal = () => {
	try {
		window.localStorage.clear();
	} catch (error) {
		console.log(error);
	}
};
