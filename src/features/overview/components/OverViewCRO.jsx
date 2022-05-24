import React, { Component } from "react";

import { SectionRow } from "../../../components/section";
import CompRegRow from "../../../components/cards/compRegRow";
import DashDetailCard from "../../../components/cards/dashDetailCard";
import TimePeriodSelection from "../../../components/cards/timePeriodSelection";
import StatCard from "../../../components/cards/statCard";

export default function OverViewCRO({ allData }) {
	return (
		<>
			<SectionRow>
				<div className='w-9/12'></div>
				<TimePeriodSelection />
			</SectionRow>
			<SectionRow className='mb-5'>
				<span className='overViewTitle'>Approval Summary</span>
			</SectionRow>
			<SectionRow>
				<StatCard
					value={allData?.totalApprovedCount}
					text={"Approved in this Period"}
					presentage={allData?.totalApprovedPrecentage}
					image={"https://img.icons8.com/ios-filled/50/6EEDA8/checkmark--v1.png"}
					accent={"#E3FEF3"}
				/>
				<StatCard
					value={allData?.totalPendingCount}
					text={"Pending in this Period"}
					presentage={allData?.totalPendingPrecentage}
					image={"https://img.icons8.com/ios/50/FFBA32/timer.png"}
					accent={"#FFF5D2"}
				/>
				<StatCard
					value={allData?.totalRejectedCount}
					text={"Rejected in this Period"}
					presentage={allData?.totalRejectedPrecentage}
					image={"https://img.icons8.com/material-outlined/50/FB6161/cancel--v1.png"}
					accent={"#FFE2E2"}
				/>
			</SectionRow>
			<SectionRow className='mt-5'>
				<span className='overViewTitle'>Application Status</span>
			</SectionRow>
			<SectionRow>
				<DashDetailCard title='Company Registration' path='/web/companyRegistration'>
					<CompRegRow
						title='New Registration'
						value={allData?.companyRegistration?.pendingCount}
						color='#3375EF'
					/>
					<CompRegRow
						title='Resubmitted'
						value={allData?.companyRegistration?.resubmissionCount}
						color='#ffc652'
					/>
					<CompRegRow
						title='Checked'
						value={allData?.companyRegistration?.completedCount}
						color='#8df1bc'
					/>
					<CompRegRow
						title='Rejected'
						value={0 | allData?.companyRegistration?.rejected}
						color='#d95757'
					/>
				</DashDetailCard>
				<DashDetailCard title='Certificate of Origin' path='/web/ecoo'>
					<CompRegRow
						title='New Registration'
						value={allData?.certificateOfOrigin?.pendingCount}
						color='#3375EF'
					/>
					<CompRegRow
						title='Resubmitted'
						value={allData?.certificateOfOrigin?.resubmissionCount}
						color='#ffc652'
					/>
					<CompRegRow
						title='Checked'
						value={allData?.certificateOfOrigin?.completedCount}
						color='#8df1bc'
					/>
					<CompRegRow
						title='Rejected'
						value={allData?.companyRegistration?.completedCount}
						color='#d95757'
					/>
				</DashDetailCard>
				<DashDetailCard title='Quota Application' path='/web/trqc'>
					<CompRegRow
						title='New Registration'
						value={allData?.quotaApplication?.pendingCount}
						color='#3375EF'
					/>
					<CompRegRow
						title='Resubmitted'
						value={allData?.quotaApplication?.resubmissionCount}
						color='#ffc652'
					/>
					<CompRegRow
						title='Checked'
						value={allData?.quotaApplication?.completedCount}
						color='#8df1bc'
					/>
					<CompRegRow
						title='Rejected'
						value={allData?.companyRegistration?.completedCount}
						color='#d95757'
					/>
				</DashDetailCard>
			</SectionRow>
			<SectionRow>
				{/* <DashDetailCard title="Company Registration" headerIcon={<Avatar />}>
          <AccountantRow title="payment 1" value="6" color="#bb93d9" />
          <AccountantRow title="payment 2" value="6" color="#bb93d9" />
          <AccountantRow title="payment 3" value="6" color="#bb93d9" />
          <AccountantRow title="payment 4" value="6" color="#bb93d9" />
        </DashDetailCard> */}
			</SectionRow>
			<br />
		</>
	);
}
