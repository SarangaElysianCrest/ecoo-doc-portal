import { getFileURL } from "../app/api/file_api";
import { statusText, userRoles } from "./constants";
import { getUserRoleFromLocal } from "./loginHelper";

export const checker = (arr) => arr?.every((v) => v === true);

export const updateStatus = (obj, str) => ({ ...obj, isApprove: str });

const initPerson = {
  FullName: "",
  designation: "",
  nic: "",
  email: "",
  mobileNumber: "",
  telePhoneNumber: "",
  Address: "",
  label: "",
  NICImage: "",
  NICFront: "",
  isApprove: false,
};

export const makePersonArray = (array) => {
  if (array && array.length > 0)
    return array?.map((arr) => {
      return {
        ...initPerson,
        FullName: arr.fullName,
        designation: arr.designation,
        nic: arr.nicNo,
        email: arr.email,
        mobileNumber: arr.mobile,
        telePhoneNumber: arr.telephone,
        NICFront: arr.nicFrontPath,
        NICBack: arr.nicBackPath,
        sign: arr.digitalSignaturePath,
        Address: arr.residenceAddress,
        isApprove: arr.status === statusText.PENDING,
      };
    });
};

const initDoc = {
  id: "",
  path: "",
  isApprove: statusText.DEFAULT,
};

export const makeDocArray = (array) => {
  if (array && array.length > 0)
    return array?.map((arr) => {
      return {
        ...initDoc,
        id: arr.documentFilePath,
        path: arr.documentFilePath,
        type: arr.documentType,
        isApprove:
          arr.status !== statusText.PENDING ? statusText.DEFAULT : arr.status,
        ...arr,
      };
    });
};

export const isApproved_ByRole = () => {
  const role = getUserRoleFromLocal();
  switch (role) {
    case userRoles.dg:
      return "APPROVED";
    case userRoles.ad:
      return "RECOMMENDED";
    case userRoles.cro:
      return "CHECKED";

    default:
      return "";
  }
};
