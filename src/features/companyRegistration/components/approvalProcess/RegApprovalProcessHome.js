import React from "react";
import { Route } from "react-router-dom";
import Section, { SectionColumn, SectionRow } from "../../../../components/section";
import RegApprovalProcessStep01 from "./components/RegApprovalProcessStep01";
import RegApprovalProcessStep02 from "./components/RegApprovalProcessStep02";
import RegApprovalProcessStep03 from "./components/RegApprovalProcessStep03";
import RegApprovalProcessStep04 from "./components/RegApprovalProcessStep04";

const RegApprovalProcessHome = () => {
	return (
		<React.Fragment>
			<div className='bnpl-header-wrapper'>
				<SectionRow className='flex-wrap justify-center section-row-1 pb-4 pt-5'>
					<div className='bnpl-heading-1'>Company Registration Approval Process</div>
				</SectionRow>
				<SectionRow className='flex-wrap justify-center section-row-1 pb-5 mb-5'>
					<div className='bnpl-sub-heading'>Please follow the easy steps</div>
				</SectionRow>
			</div>
			<Route path={"/approvalProcess/companyRegistration/step01"}>
				<RegApprovalProcessStep01 />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step02"}>
				<RegApprovalProcessStep02 />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step03"}>
				<RegApprovalProcessStep03 />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step04"}>
				<RegApprovalProcessStep04 />
			</Route>
		</React.Fragment>
	);
};

export default RegApprovalProcessHome;
