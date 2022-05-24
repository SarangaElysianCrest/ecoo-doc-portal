import {
	finalApprovalAPI,
	getFromStep,
	getFromStep1API,
	getFromStep2API,
	getFromStep3API,
	getFromStep4API,
	getFromStep5API,
	getRegRequestAPI,
	finalApprovalStatusUpdateAPI,
} from "./core_api";
import { getFileAPI } from "./file_api";

export const getRegRequest_adapter = () => {
	const res = getRegRequestAPI();
	// manipulate object
	return res;
};

export const getFromStep_adapter = () => {
	const res = getFromStep();
	// manipulate object
	return res;
};

export const getFromStep1_adapter = async (id) => {
	try {
		const res = await getFromStep1API(id);
		console.log("adapter :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};

export const getFromStep2_adapter = async (id) => {
	try {
		const res = await getFromStep2API(id);
		console.log("adapter :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};

export const getFromStep3_adapter = async (id) => {
	try {
		const res = await getFromStep3API(id);
		console.log("adapter :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};

export const getFromStep4_adapter = async (id) => {
	try {
		const res = await getFromStep4API(id);
		console.log("adapter :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};

export const getFromStep5_adapter = async (id) => {
	try {
		const res = await getFromStep5API(id);
		console.log("adapter :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};

export const getFileAPI_adapter = async (fileID) => {
	try {
		const res = await getFileAPI(fileID);
		console.log("adapter :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};

export const finalApprovalAPI_adapter = async (data, cpID) => {
	// const userID =  getUserIDFromLocal();
	// const dataShape = {
	//   step01:{status:'APROVE',comment: "ඒැිඒවවිාය"},
	//   step02:{status:'APROVE',comment: "නනිදාස"},
	//   step03:{status:'APROVE',comment: "jkasdh"},
	//   step04:{status:'APROVE',comment: "oowue"},
	//   step05:{status:'APROVE',comment: "lckmkssh"}
	// }

	console.log("Approval steps comment data >>>>>>>>", data);
	try {
		const res = await finalApprovalAPI(data, cpID);
		console.log("Approval steps adapter response   >>>>>>>> :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};
export const finalApprovalStatusUpdateAPI_adapter = async (data, cpID, userRole) => {
	const dataObject = {
		company: `${
			data.st2Comment === "" &&
			data.st1Comment === "" &&
			data.st3Comment === "" &&
			data.st4Comment === "" &&
			data.st5Comment === ""
				? userRole === "CRO"
					? "CHECKED"
					: userRole === "AD"
					? "RECOMMENDED"
					: userRole === "DG"
					? "APPROVED"
					: "COMPLETED"
				: userRole + "_REJECTED"
		}`,
		contactPerson: `${
			data.st4Comment === ""
				? userRole === "CRO"
					? "CHECKED"
					: userRole === "AD"
					? "RECOMMENDED"
					: userRole === "DG"
					? "APPROVED"
					: "COMPLETED"
				: userRole + "_REJECTED"
		}`,
		factoryDetail: `${
			data.st5Comment === ""
				? userRole === "CRO"
					? "CHECKED"
					: userRole === "AD"
					? "RECOMMENDED"
					: userRole === "DG"
					? "APPROVED"
					: "COMPLETED"
				: userRole + "_REJECTED"
		}`,
		management: `${
			data.st3Comment === ""
				? userRole === "CRO"
					? "CHECKED"
					: userRole === "AD"
					? "RECOMMENDED"
					: userRole === "DG"
					? "APPROVED"
					: "COMPLETED"
				: userRole + "_REJECTED"
		}`,
		productDetail: `${
			data.st1Comment === ""
				? userRole === "CRO"
					? "CHECKED"
					: userRole === "AD"
					? "RECOMMENDED"
					: userRole === "DG"
					? "APPROVED"
					: "COMPLETED"
				: userRole + "_REJECTED"
		}`,
	};

	console.log("Approval dataObject >>>>>>>>", dataObject);

	try {
		const res = await finalApprovalStatusUpdateAPI(dataObject, cpID);
		console.log("Approval Status adapter response   >>>>>>>> :", res);
		return res;
	} catch (err) {
		console.log("adapter error :", err);
		throw err;
	}
};
