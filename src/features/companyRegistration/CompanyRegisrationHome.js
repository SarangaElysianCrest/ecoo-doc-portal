import { SectionColumn, SectionRow } from "../../components/section";
import TableBase from "../../components/table/tableBase";
import Completed from "./components/Completed";
import NewRegistrationReqest from "./components/NewRegistrationReqest";
import ReSubmitedRequest from "./components/ReSubmitedRequest";

function CompanyRegisrationHome(props) {
  return (
    <div>
      <SectionRow className="flex-wrap section-row-1 mb-6 sm:mb-0 dashboard-row">
        <NewRegistrationReqest {...props} />
        <ReSubmitedRequest {...props} />
        <Completed {...props} />
      </SectionRow>
      <SectionRow className="flex-wrap section-row-1 mb-6 dashboard-row mt-10">
        <TableBase />
      </SectionRow>
      <SectionRow className="flex-wrap section-row-1 dashboard-row">
        <SectionColumn className="w-full   relative "></SectionColumn>
      </SectionRow>
    </div>
  );
}

export default CompanyRegisrationHome;
