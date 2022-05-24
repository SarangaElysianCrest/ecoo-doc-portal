import { SectionRow } from "../../components/section";
import React, { useEffect, useState } from "react";
import OverViewCRO from "./components/OverViewCRO";
import OverViewAdmin from "./components/OverViewAdmin";
import { useStore } from "../../app/context/store";
import { useAlert } from "../../app/context/alerts";
import { userRoles } from "../../Helpers/constants";
import { getUserIDFromLocal } from "../../Helpers/loginHelper";
import { getCompanyRegStatus } from "../../app/api/core_api";

const OverView = (props) => {
  const { store, setStore } = useStore();
  const { setAlert } = useAlert();
  const [OverViewData, setOverViewData] = useState({
    totalApprovedCount: 120,
    totalApprovedPrecentage: "32.4",
    totalPendingCount: 174,
    totalPendingPrecentage: "56.2%",
    totalRejectedCount: 37,
    totalRejectedPrecentage: "5.8%",
    companyRegistration: {
      completedCount: 0,
      pendingCount: 0,
      resubmissionCount: 0,
      rejectedCount:0,
    },
    certificateOfOrigin: {
      completedCount: 0,
      pendingCount: 0,
      resubmissionCount: 0,
      rejectedCount:0,
    },
    quotaApplication: {
      completedCount: 0,
      pendingCount: 0,
      resubmissionCount: 0,
    },
  });

  useEffect(() => {
	  // fetch detail from DB by user role
    if(getUserIDFromLocal()){
      setAlert({message:`User ${getUserIDFromLocal()} Login successfull !`,severity:"success",show:true})
    }

    let responseCount = {};

    getCompanyRegStatus().then((resCount) => {
      responseCount = resCount? resCount:0;

      let pendingCountFormatted = responseCount;
      setOverViewData((prevData) => ({
        ...prevData,
        companyRegistration: {...prevData.companyRegistration, pendingCount:pendingCountFormatted},
      }));
  
    });

  }, []);

  const renderView = () => {
    switch (store.role) {
      case userRoles.ad:
        return <OverViewAdmin allData={OverViewData} />;

      case userRoles.dg:
        return <OverViewAdmin allData={OverViewData} />;

      case userRoles.cro:
        return <OverViewCRO allData={OverViewData} />;

      default:
        return <p>No User Role Found</p>;
    }
  };

  return (
    <React.Fragment>
      {renderView()}
      {/* <OverViewCRO/> */}
      {/* <OverViewAdmin/> */}
    </React.Fragment>
  );
};

export default OverView;
