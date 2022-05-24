import { useEffect, useState } from "react";

export const callAPI = (func, setState) => {
  func()
    .then((res) => {
      setState(res);
      console.log("CALLAPI_DATA :",res);
    })
    .catch((err) => {
      setState(err);
      console.log("CALLAPI_ERROR :",err);
    });
};
