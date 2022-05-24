import React, { useEffect, useState } from "react";
import Section, {
  SectionColumn,
  SectionRow,
} from "../../../../../components/section";
import PopupButton from "../../../../../components/buttons/PopupButton";
import ManagementSBTN from "../../../../../components/buttons/managementSBTN";

// import BackImg from "../../../../public/assets/icons/back.svg";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import RejectButton from "../../../../../components/buttons/rejectButton";
import ReaderPDF from "../../../../../components/pdfPreview/readerPDF";
import {
  checker,
  makePersonArray,
  updateStatus,
} from "../../../../../Helpers/uiHelper";
import PersonalInfoCard from "../../../../../components/cards/personalInfoCard";
import { getFromStep3_adapter } from "../../../../../app/api/adapter";
import { callAPI } from "../../../../../app/helper/useAPI";
import { companyID } from "../RegApprovalProcessHome";
import { getFileURL } from "../../../../../app/api/file_api";
import { REG_APPROVAL } from "../../../../../app/routes";
import DigitalSign from "../../../../../components/cards/digitalSignature";

const person01 = {
  FullName: "Shehan Kaluthilake",
  designation: "CHAIRMAN",
  nic: "812975487V",
  email: "shehanKalu@gmail.com",
  mobileNumber: "0715427857",
  telePhoneNumber: "0115825673",
  Address: "70/E,Kandawala,Rathmalana",
  label: "Chairman Information",
  NICImage: "/image/NIC01.jpg",
  isApprove: false,
};
const person02 = {
  FullName: "Nulupul Kodikara",
  designation: "MANAGING DIRECTORE",
  nic: "911433156V",
  email: "niluKodi@gmail.com",
  mobileNumber: "0717653125",
  telePhoneNumber: "0119865357",
  Address: "20/R Makola, Kiribathgoda",
  label: "Management Information",
  NICImage: "/image/NIC02.jpg",
  isApprove: false,
};
const person03 = {
  FullName: "Oshada Rathnayake",
  designation: "MANAGING DIRECTORE",
  nic: "890445156V",
  email: "oshada@gmail.com",
  mobileNumber: "0719959259",
  telePhoneNumber: "011254515",
  Address: "38/15/S Kadana, Ragama",
  label: "Management Information",
  NICImage: "/image/NIC03.jpg",
  isApprove: false,
};

const _actors = [person01, person02, person03];

const RegApprovalProcessStep02 = (props) => {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [actors, setActors] = useState(_actors);
  const [data, setData] = useState();
  const [nicpath, setNicpath] = useState(null);

  useEffect(() => {
    callAPI(() => getFromStep3_adapter(companyID), setData);
  }, []);

  useEffect(() => {
    setActors(makePersonArray(data));
  }, [data]);

  useEffect(() => {
    if (selectedPerson) {
      console.log("selectedPerson :", selectedPerson);
      setNicpath(getFileURL(selectedPerson.NICBack));
    }
  }, [selectedPerson]);

  const handleClick = (_tab) => {
    setSelectedPerson(_tab);
  };

  const getStates = (_state) => {
    let arr = _state;
    return arr?.map((file) => file.isApprove);
  };

  const renderTabs = (array = []) => {
    return array.map((tab) => (
      <ManagementSBTN
        state={tab}
        image={AdminPanelSettingsOutlinedIcon}
        onClick={() => handleClick(tab)}
        designation={tab.designation}
        className={
          tab?.nic === selectedPerson?.nic
            ? "managementBTN__select"
            : tab.isApprove
            ? "managementBTN__approve"
            : ""
        }
      />
    ));
  };
  useEffect(() => {
    props.setActiveStep(2);
    sessionStorage.setItem("currentStep", 2);
  }, [props]);

  const handleApprove = () => {
    let index = actors.findIndex((act) => act.nic === selectedPerson.nic);
    if (actors.length > index) {
      setSelectedPerson(actors[index + 1]);
    }
    let newState = actors.map((act) =>
      act.nic === selectedPerson.nic ? updateStatus(selectedPerson, true) : act
    );
    setActors(newState);
    sessionStorage.setItem("completedSteps", 3);
  };

  return (
    <React.Fragment>
      <div className="popupBtn">
        <PopupButton />
      </div>
      <SectionRow className="w-1/12"></SectionRow>
      <SectionRow className="ml-28">{renderTabs(actors)}</SectionRow>
      <Section>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-4/12 ">
          <SectionColumn>
            <span class="BusinessRegistrationText">
              {selectedPerson?.label}
            </span>
            <span class="Checked-and-Approvel-by">
              Checked and approved by :
            </span>
            <span class="userName">Mr.Herath (CRO)</span>
            <SectionRow className="mb-5">
              <span className="dateAndTime">2021.12.08 &nbsp;&nbsp;</span>
              <span className="dateAndTime">10:40AM</span>
            </SectionRow>
            <PersonalInfoCard state={selectedPerson} />
            <DigitalSign
              path={selectedPerson && getFileURL(selectedPerson.sign)}
            />
            <div className="docButton-wrapper">
              <div className="mt-1">
                <SectionRow>
                  {/* <FileUploadButton
                    image={BrCertificateImg}
                    btnName="NIC"
                    onClick={handleSelectPdf}
                    path={pdfPaths[0]}
                    isSelected={"BR Certificate"}
                    state={pdfState["/pdf/sample1.pdf"]}
                  /> */}
                </SectionRow>
              </div>
              <div></div>
            </div>
          </SectionColumn>
        </SectionRow>
        {/* <SectionRow className='w-1/12'></SectionRow>
				<SectionRow className='w-4/12 '>
					<div className='nicDiv'>
						{selectedPerson.label === "Chairman" ? (
							<img src={NIC01} className='nicImage' />
						) : (
							<img src={NIC02} className='nicImage' />
						)}
					</div>
				</SectionRow> */}
        <SectionRow className="w-5/12 ">
          {<ReaderPDF extension=".jpg" path={nicpath} />}
        </SectionRow>
        <SectionRow className="w-full ">
          <SectionColumn className="w-4/12 ml-10"></SectionColumn>
          <SectionColumn className="w-6/12">
            <SectionRow className="w-10/12 justify-end">
              <RejectButton currentStep={3} nextRoute={REG_APPROVAL.step04} />
              <AcceptButton
                pdfStatusArray={getStates(actors)}
                onApprove={handleApprove}
                step="step04"
                label={checker(getStates(actors))}
                nextBtnName="Next"
              />
            </SectionRow>
          </SectionColumn>
        </SectionRow>

        <div className="grid justify-items-center mt-5 mb-10 ml-80"></div>
      </Section>
    </React.Fragment>
  );
};

export default RegApprovalProcessStep02;
