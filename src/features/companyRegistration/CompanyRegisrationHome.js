import StatCard from "../../components/cards/statCard";
import { SectionColumn, SectionRow } from "../../components/section";
import TableBase from "../../components/table/tableBase";
import Completed from "./components/Completed";
import NewRegistrationReqest from "./components/NewRegistrationReqest";
import ReSubmitedRequest from "./components/ReSubmitedRequest";

function CompanyRegisrationHome(props) {
	return (
		<div>
			<SectionRow className='mb-5'>
				<span className='heading-1'>Company Registration</span>
			</SectionRow>
			<SectionRow className='flex-wrap section-row-1 mb-6 sm:mb-0 dashboard-row'>
				<StatCard
					value={"55"}
					text={"New Registration Requests"}
					image={"https://img.icons8.com/ios/50/3054EA/new-company.png"}
					accent={"#E6E9FF"}
				/>
				<StatCard
					value={"02"}
					text={"Resubmitted Registration Requests"}
					image={"https://img.icons8.com/ios-filled/50/FFBA32/submit-progress.png"}
					accent={"#FFF5D2"}
				/>
				<StatCard
					value={"95"}
					text={"Completed Registration Requests"}
					image={"https://img.icons8.com/material-outlined/50/6EEDA8/checkmark--v1.png"}
					accent={"#E3FEF3"}
				/>
			</SectionRow>
			<SectionRow className='flex-wrap section-row-1 mb-6 dashboard-row mt-5'>
				<TableBase />
			</SectionRow>
			<SectionRow className='flex-wrap section-row-1 dashboard-row'>
				<SectionColumn className='w-full   relative '></SectionColumn>
			</SectionRow>
		</div>
	);
}

export default CompanyRegisrationHome;
