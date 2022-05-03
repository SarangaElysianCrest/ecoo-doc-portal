import React, { useEffect, useRef, useState } from "react";
import Section, {
  SectionColumn,
  SectionRow,
} from "../../../../../components/section";

import PDFView01 from "../../../../../components/pdfPreview/pdfView01";
import PDFView02 from "../../../../../components/pdfPreview/pdfView02";
import PDFView03 from "../../../../../components/pdfPreview/pdfView03";
import RoundedButton from "../../../../../components/buttons/RoundedButtons";
import FileViewButton from "../../../../../components/buttons/fileViewButton";
import birthImg from "./../../../../../assets/DOC/br-certificate.svg";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useHistory } from "react-router-dom";
import ConfirmPrompt from "../../../../../components/alerts/confirmPrompt";
import RejectDialog from "../../../../../components/alerts/rejectPrompt";
import NpPdf from "../../../../../components/pdfPreview/NoPdf";
import ManagementSBTN from "../../../../../components/buttons/managementSBTN";

// import BackImg from "../../../../public/assets/icons/back.svg";
import BrCertificateImg from "../../../../../assets/icons/br-certificate.svg";
import UploadDocImg from "../../../../../assets/icons/upload-doc.svg";
import FileUploadButton from "../../../../../components/buttons/FileUploadButton";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NICImage from "../../../../../assets/images/DocImage/NIC.jpg";
import NIC01 from "../../../../../assets/images/DocImage/NIC01.jpg";
import NIC02 from "../../../../../assets/images/DocImage/NIC02.jpg";
import RejectButton from "../../../../../components/buttons/rejectButton";

const pdfPaths = ["/pdf/sample1.pdf"];

const states = {
  "/pdf/sample1.pdf": false,
};
let checker = (arr) => arr.every((v) => v === true);

const RegApprovalProcessStep02 = (props) => {
  const [pdfPath, setPdfPath] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [pdfState, setPdfState] = useState(states);

  useEffect(() => {
    props.setActiveStep(2);
  }, [props]);

  const handleSelectPdf = (_pdfPath) => {
    setPdfPath(_pdfPath);
  };

  const getPdfInstance = (path) => {
    switch (path) {
      case pdfPaths[0]:
        return <PDFView01 path={pdfPaths[0]} />;
      case pdfPaths[1]:
        return <PDFView01 path={pdfPaths[1]} />;
      case pdfPaths[2]:
        return <PDFView01 path={pdfPaths[2]} />;
      default:
        return <NpPdf />;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    history.push("/approvalProcess/companyRegistration/step03");
  };

  const handleReject = () => {
    handleClickOpen();
  };

  const getStates = (_state) => {
    const arr = [];
    for (const property in _state) {
      console.log(`${property}: ${_state[property]}`);
      arr.push(_state[property]);
    }
    return arr;
  };

  const handleApprove = () => {
    // console.log(">>>>>>", pdfState);
    // setPdfState({ ...pdfState, [pdfPath]: true });
    window.open("/approvalProcess/companyRegistration/step04", "_self");
  };

  const [selectedPerson, setselectedPerson] = useState({});

  useEffect(() => {
    setselectedPerson(person01);
  }, []);

  console.log(selectedPerson.NICImage);

  const person01 = {
    FullName: "Shehan Kaluthilake",
    designation: "Chairman",
    nic: "973433156V",
    email: "shehanKalu@gmail.com",
    mobileNumber: "0719959259",
    telePhoneNumber: "011254515",
    Address: "Kandawala, Rathmalana",
    label: "Chairman Infomation",
    NICImage: { NIC01 },
  };
  const person02 = {
    FullName: "Nulupul Kodikara",
    designation: "Managing Director",
    nic: "973433156V",
    email: "niluKodi@gmail.com",
    mobileNumber: "0719959259",
    telePhoneNumber: "011254515",
    Address: "Kandawala, Rathmalana",
    label: "Manegment Infomation",
    NICImage: { NIC02 },
  };
  const person03 = {
    FullName: "Oshada Rathnayake",
    designation: "Managing Director",
    nic: "973433156V",
    email: "oshada@gmail.com",
    mobileNumber: "0719959259",
    telePhoneNumber: "011254515",
    Address: "Kandawala, Rathmalana",
    label: "Manegment Infomation",
    NICImage: { NIC01 },
  };

  return (
    <React.Fragment>
      <SectionRow className="w-1/12"></SectionRow>
      <SectionRow className="ml-28">
        <ManagementSBTN
          props={person01}
          setselectedPerson={setselectedPerson}
          image={AdminPanelSettingsOutlinedIcon}
        />
        <ManagementSBTN
          props={person02}
          setselectedPerson={setselectedPerson}
          image={AccountCircleOutlinedIcon}
        />
        <ManagementSBTN
          props={person03}
          setselectedPerson={setselectedPerson}
          image={AccountCircleOutlinedIcon}
        />
      </SectionRow>
      <Section>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-4/12 ">
          <SectionColumn>
            <span class="BusinessRegistrationText">{selectedPerson.label}</span>
            <span class="Checked-and-Approvel-by">
              Checked and Approvel by:
            </span>
            <span class="userName">Mr.Herath (CRO)</span>
            <SectionRow className="mb-5">
              <span className="dateAndTime">2021.12.08 &nbsp;&nbsp;</span>
              <span className="dateAndTime">10:40AM</span>
            </SectionRow>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Full Name</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.FullName}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Designation</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.designation}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">NIC</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.nic}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">email</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.email}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Mobile Number</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.mobileNumber}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Telephone</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.telePhoneNumber}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Address</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {selectedPerson.Address}
              </div>
            </div>

            <div className="docButton-wrapper">
              <div className="mt-1">
                {/* <SectionRow>
                  <FileUploadButton
                    image={BrCertificateImg}
                    btnName="NIC"
                    onClick={handleSelectPdf}
                    path={pdfPaths[0]}
                    isSelected={"BR Certificate"}
                    state={pdfState["/pdf/sample1.pdf"]}
                  />
                </SectionRow> */}
              </div>
              <div></div>
            </div>
          </SectionColumn>
        </SectionRow>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-4/12 ">
          <div className="nicDiv">
            {selectedPerson.label === "Chairman" ? (
              <img src={NIC01} className="nicImage" />
            ) : (
              <img src={NIC02} className="nicImage" />
            )}
          </div>
        </SectionRow>
        {/* <SectionRow className="w-5/12 ">{getPdfInstance(pdfPath)}</SectionRow> */}
        <SectionRow className="w-full ">
          <SectionColumn className="w-4/12 ml-10"></SectionColumn>
          <SectionColumn className="w-6/12">
            <SectionRow className="w-10/12 justify-end">
              <RejectButton
                onClick={handleClickOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
              />
              <AcceptButton
                pdfStatusArray={[false]}
                onApprove={handleApprove}
                step="step04"
                label={checker(getStates(pdfState)) ? "Approve All" : "Approve"}
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
