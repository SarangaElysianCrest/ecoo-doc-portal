import React, { useEffect, useState } from "react";
import Section, {
  SectionColumn,
  SectionRow,
} from "../../../../../components/section";

// import BackImg from "../../../../public/assets/icons/back.svg";
import BrCertificateImg from "../../../../../assets/icons/br-certificate.svg";
import UploadDocImg from "../../../../../assets/icons/upload-doc.svg";
import FileUploadButton from "../../../../../components/buttons/FileUploadButton";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import PopupButton from "../../../../../components/buttons/PopupButton";
import RejectButton from "../../../../../components/buttons/rejectButton";
import ReaderPDF from "../../../../../components/pdfPreview/readerPDF";
import { APPROVED, DEFAULT, SELECT } from "../../../../../Helpers/constants";
import { checker, updateStatus } from "../../../../../Helpers/uiHelper";
import { callAPI } from "../../../../../app/helper/useAPI";
import { getFromStep2_adapter } from "../../../../../app/api/adapter";
import { getFileURL } from "../../../../../app/api/file_api";
import { companyID } from "../RegApprovalProcessHome";
import { REG_APPROVAL } from "../../../../../app/routes";

const _state = [
  { id: "1", path: "/pdf/Cd.pdf", isApprove: "DEFAULT" },
  { id: "2", path: "/pdf/Cd2.pdf", isApprove: "DEFAULT" },
  { id: "3", path: "/pdf/Cd3.pdf", isApprove: "DEFAULT" },
];

const RegApprovalProcessStep02 = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [stateFile, setStateFile] = useState(_state);
  const [open, setOpen] = useState(false);
  const [approved, setApproved] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    // console.log("State :",stateFile,"selected :",selectedFile,"approved :",approved);
  }, [stateFile, selectedFile, approved]);

  useEffect(() => {
    callAPI(() => getFromStep2_adapter(companyID), setData);
  }, []);

  useEffect(() => {
    if (data) {
      let brn = getFileURL(data.brnFilePath);
      let tin = getFileURL(data.tinFilePath);
      let vat = getFileURL(data.vatFilePath);
      const files = [
        { id: "1", path: brn, isApprove: "DEFAULT" },
        { id: "2", path: tin, isApprove: "DEFAULT" },
        { id: "3", path: vat, isApprove: "DEFAULT" },
      ];
      setStateFile(files);
    }
  }, [data]);

  const handleSelectPdf = (selected) => {
    let updateObj = updateStatus(selected, SELECT);
    setSelectedFile(updateObj);
    let files = stateFile.map((file) =>
      file.id === selected.id ? updateObj : updateStatus(file, DEFAULT)
    );
    setStateFile(files);
  };

  const getStates = (_state) => {
    let arr = getAll();
    return arr?.map((file) => (file.isApprove === APPROVED ? true : false));
  };

  const getAll = () => {
    return [...stateFile, ...(approved || [])];
  };

  const getByID = (id) => {
    let obj = getAll().find((file) => file.id == id);
    return obj;
  };

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
    if (selectedFile !== null) {
      let newState = stateFile.filter((file) => file.id !== selectedFile.id);
      setStateFile(newState);
      if (!approved.find((app) => app.id === selectedFile.id))
        setApproved([...approved, updateStatus(selectedFile, APPROVED)]);
      setSelectedFile(null);
      // console.log("new State :",newState,"approve :",approved);
      sessionStorage.setItem("completedSteps", 2);
    }
  };

  useEffect(() => {
    props.setActiveStep(1);
    sessionStorage.setItem("currentStep", 1);
  }, [props]);

  return (
    <React.Fragment>
      <div className="popupBtn">
        <PopupButton />
      </div>
      <Section>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-4/12 flex">
          <SectionColumn>
            <span class="BusinessRegistrationText">Business Registration</span>
            <span class="Checked-and-Approvel-by">
              Checked and approved by:
            </span>
            <span class="userName">Mr.Herath (CRO)</span>
            <SectionRow className="mb-5">
              <span className="dateAndTime">2021.12.08 &nbsp;&nbsp;</span>
              <span className="dateAndTime">10:40AM</span>
            </SectionRow>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Business Name</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {data && data.businessName}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Business Type</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {data && data.businessType}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">BR Number</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {data && data.brNumber}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">TIN</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {data && data.tin}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">VAT Number</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {data && data.vatNumber}
              </div>
            </div>
            <div className="Rectangle-1 flex-row flex">
              <div className=" w-4/12  m-1 Business-Name">Address</div>
              <div className=" w-1/12  m-1 Business-Name">:</div>
              <div className=" w-7/12  m-1 Business-Name">
                {data && data.address}
              </div>
            </div>

            <div className="docButton-wrapper">
              <div className="mt-1">
                <SectionRow>
                  <FileUploadButton
                    image={BrCertificateImg}
                    btnName="BR Certificate"
                    onClick={handleSelectPdf}
                    isSelected={"BR Certificate"}
                    state={getByID("1")}
                  />
                  <FileUploadButton
                    image={UploadDocImg}
                    btnName="TIN"
                    className="mr-12 ml-12"
                    onClick={handleSelectPdf}
                    isSelected={"TIN"}
                    state={getByID("2")}
                  />
                  <FileUploadButton
                    image={UploadDocImg}
                    btnName="VAT"
                    onClick={handleSelectPdf}
                    isSelected={"VAT"}
                    state={getByID("3")}
                  />
                </SectionRow>
              </div>
              <div></div>
            </div>
          </SectionColumn>
        </SectionRow>
        <SectionRow className="w-5/12 ">
          {<ReaderPDF path={selectedFile?.path || ""} />}
        </SectionRow>
        <SectionRow className="w-full  h-16">
          <SectionColumn className="w-6/12"></SectionColumn>
          <SectionColumn className="w-6/12">
            <SectionRow className="w-10/12 justify-end">
              <RejectButton currentStep={2} nextRoute={REG_APPROVAL.step03} />
              <AcceptButton
                pdfStatusArray={getStates(stateFile)}
                onApprove={handleApprove}
                step="step03"
                label={checker(getStates(stateFile))}
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
