import React, { useState, useEffect } from "react";
import Section, {
  SectionColumn,
  SectionRow,
} from "../../../../../components/section";

// import BackImg from "../../../../public/assets/icons/back.svg";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import PopupButton from "../../../../../components/buttons/PopupButton";
import RejectButton from "../../../../../components/buttons/rejectButton";
import PersonalInfoCard from "../../../../../components/cards/personalInfoCard";
import { callAPI } from "../../../../../app/helper/useAPI";
import { getFromStep4_adapter } from "../../../../../app/api/adapter";
import { makePersonArray } from "../../../../../Helpers/uiHelper";
import { companyID } from "../RegApprovalProcessHome";
import { REG_APPROVAL } from "../../../../../app/routes";
import { getFileURL } from "../../../../../app/api/file_api";
import DigitalSign from "../../../../../components/cards/digitalSignature";
import ReaderImage from "../../../../../components/pdfPreview/readerImage";

const RegApprovalProcessStep04 = (props) => {
  const [open, setOpen] = useState(false);
  const [actors, setActors] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    callAPI(() => getFromStep4_adapter(companyID), setData);
  }, []);

  useEffect(() => {
    setActors(makePersonArray(data));
  }, [data]);

  useEffect(() => {
    props.setActiveStep(3);
    sessionStorage.setItem("currentStep", 3);
  }, [props]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    props.handleComplete();
  };

  const handleReject = () => {
    handleClickOpen();
  };

  const handleApprove = () => {
    console.log("Test Session updated");
    sessionStorage.setItem("completedSteps", 4);
  };

  return (
    <React.Fragment>
      <Section>
        <div className="popupBtn">
          <PopupButton />
        </div>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-4/12 flex">
          <SectionColumn>
            <span class="BusinessRegistrationText">Contact Person Info</span>
            <span class="Checked-and-Approvel-by">
              Checked and approved by:
            </span>
            <span class="userName">Mr.Herath (CRO)</span>
            <SectionRow className="mb-5">
              <span className="dateAndTime">2021.12.08 &nbsp;&nbsp;</span>
              <span className="dateAndTime">10:40AM</span>
            </SectionRow>
            <PersonalInfoCard state={actors && actors[0]} />
          </SectionColumn>
        </SectionRow>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-6/12 flex mt-10">
          <ReaderImage
            path={getFileURL(actors && actors[0]?.NICFront)}
            description="ID Front"
            width="300px"
            height="300px"
          />
          <ReaderImage
            path={getFileURL(actors && actors[0]?.NICBack)}
            description="ID Back"
            width="300px"
            height="300px"
          />
        </SectionRow>
        <SectionRow className="w-1/12 mt-10"></SectionRow>
        <SectionRow className="w-4/12 flex mt-10">
          <SectionColumn>
            <span class="BusinessRegistrationText">Authorized Person Info</span>
            <span class="Checked-and-Approvel-by">
              Checked and approved by:
            </span>
            <span class="userName">Mr.Herath (CRO)</span>
            <SectionRow className="mb-5">
              <span className="dateAndTime">2021.12.08 &nbsp;&nbsp;</span>
              <span className="dateAndTime">10:40AM</span>
            </SectionRow>
            <PersonalInfoCard state={actors && actors[1]} />

            <DigitalSign path={actors && getFileURL(actors[1]?.sign)} />
            <div className="docButton-wrapper">
              <div></div>
            </div>
          </SectionColumn>
        </SectionRow>
        <SectionRow className="w-1/12 mt-10"></SectionRow>
        <SectionRow className="w-6/12 flex mt-20">
          <ReaderImage
            path={getFileURL(actors && actors[1]?.NICFront)}
            description="ID Front"
            width="300px"
            height="300px"
          />
          <ReaderImage
            path={getFileURL(actors && actors[1]?.NICBack)}
            description="ID Back"
            width="300px"
            height="300px"
          />
        </SectionRow>

        <div className="grid justify-items-center mt-5 mb-10 ml-80"></div>
        <SectionRow className="w-full">
          <SectionColumn className="w-6/12"></SectionColumn>
          <SectionColumn className="w-4/12 items-end">
            <div className="flex">
              <RejectButton currentStep={4} nextRoute={REG_APPROVAL.step05} />
              <AcceptButton
                pdfStatusArray={[true]}
                onApprove={handleApprove}
                step="step05"
                label={true}
                nextBtnName="Approve & Next"
              />
            </div>
          </SectionColumn>
        </SectionRow>
      </Section>
    </React.Fragment>
  );
};

export default RegApprovalProcessStep04;
