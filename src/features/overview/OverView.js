import { SectionRow } from "../../components/section";
import React from "react";
import CompanyRegistrationCard from "./components/CompanyRegistrationCard";
import DashDetailCard from "../../components/cards/dashDetailCard";
import Avatar from "@mui/icons-material/HowToRegOutlined";
import CompRegRow from "../../components/cards/compRegRow";
import TimePeriodSelection from "../../components/cards/timePeriodSelection";
import StatCard from "../../components/cards/statCard";
import AccountantRow from "../../components/cards/accountantRow";

const OverView = (props) => {
  return (
    <React.Fragment>
      <SectionRow>
        <div className="w-9/12"></div>
        <TimePeriodSelection />
      </SectionRow>
      <SectionRow>
        <StatCard
          value={"234"}
          text={"Approved in this Period"}
          presentage={"20.6"}
        />
        <StatCard
          value={"34"}
          text={"Pending in this Period"}
          presentage={"70.2"}
        />
        <StatCard
          value={"14"}
          text={"Rejected in this Period"}
          presentage={"20.6"}
        />
      </SectionRow>
      <SectionRow>
        <DashDetailCard
          title="Company Registration"
          path="/web/companyRegistration"
        >
          <CompRegRow title="New Registration" value="52" color="#8df1bc" />
          <CompRegRow title="Resubmitted" value="4" color="#ffc652" />
          <CompRegRow title="Completed" value="62" color="#fea6a6" />
        </DashDetailCard>
        <DashDetailCard title="E-COO" path="/web/ecoo">
          <CompRegRow title="New Registration" value="53" color="#8df1bc" />
          <CompRegRow title="Resubmitted" value="4" color="#ffc652" />
          <CompRegRow title="Completed" value="83" color="#fea6a6" />
        </DashDetailCard>
        <DashDetailCard title="TRQC" path="/web/trqc">
          <CompRegRow title="New Registration" value="5" color="#8df1bc" />
          <CompRegRow title="Resubmitted" value="1" color="#ffc652" />
          <CompRegRow title="Completed" value="60" color="#fea6a6" />
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
    </React.Fragment>
  );
};

export default OverView;
