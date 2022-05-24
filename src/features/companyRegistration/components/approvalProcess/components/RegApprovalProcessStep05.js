import React, { useEffect, useState } from "react";
import Section, {
  SectionColumn,
  SectionRow,
} from "../../../../../components/section";

import PDFView01 from "../../../../../components/pdfPreview/readerPDF";
import { useHistory } from "react-router-dom";
import ConfirmPrompt from "../../../../../components/alerts/confirmPrompt";
import RejectDialog from "../../../../../components/alerts/rejectPrompt";
import NpPdf from "../../../../../components/pdfPreview/NoPdf";
import PopupButton from "../../../../../components/buttons/PopupButton";
import testImage from "./../../../../../assets/images/The-Process-Flow-Chart-of-JS-factory.png";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import RejectButton from "../../../../../components/buttons/rejectButton";
import { getFromStep5_adapter } from "../../../../../app/api/adapter";
import { callAPI } from "../../../../../app/helper/useAPI";
import { makeDocArray } from "../../../../../Helpers/uiHelper";
import { statusText } from "../../../../../Helpers/constants";
import ReaderPDF from "../../../../../components/pdfPreview/readerPDF";
import { getFileURL } from "../../../../../app/api/file_api";
import { companyID } from "../RegApprovalProcessHome";
import ManagementSBTN from "../../../../../components/buttons/managementSBTN";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import FileUploadButton from "../../../../../components/buttons/FileUploadButton";
import BrCertificateImg from "../../../../../assets/icons/br-certificate.svg";
import { Button } from "@mui/material";
import RenderTabsBTN from "../../../../../components/buttons/renderTabsBTN";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const doc = {
  modifiedBy: "Ishan",
  status: "PENDING",
  factoryDetailDocCollection: [
    {
      id: 1,
      documentType: "doc",
      documentFilePath: "23658799412647899",
      documentName: "factory details 01",
    },
    {
      id: 2,
      documentType: "pdf",
      documentFilePath: "266772354",
      documentName: "factory details 02",
    },
    {
      id: 3,
      documentType: "pdf",
      documentFilePath: "26677235234",
      documentName: "factory details 03",
    },
    {
      id: 4,
      documentType: "pdf",
      documentFilePath: "266772234354",
      documentName: "factory details 04",
    },
  ],
};

const GLOBAL_STATE = [];

const RegApprovalProcessStep05 = (props) => {
  const [data, setData] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const [docs, setDocs] = useState({ id: "", path: "", isApprove: "" });
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [_selectedID, set_selectedID] = useState();

  useEffect(() => {
    callAPI(() => getFromStep5_adapter(companyID), setData);
  }, []);

  useEffect(() => {
    setDocs(makeDocArray(data));
    console.log("Step-05 DATA :", data);
  }, [data]);

  useEffect(() => {
    props.setActiveStep(4);
    sessionStorage.setItem("currentStep", 4);
  }, [props]);

  useEffect(() => {
    props.setActiveStep(4);
  }, [props]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {};

  const handleReject = () => {
    handleClickOpen();
  };

  const handleClick = (_tab, e) => {
    set_selectedID(_tab.id);
    setSelectedFile(_tab);
  };

  const renderTabs = (array) => {
    return (
      array &&
      array?.map((tab, i) => {
        return (
          <div className="pb-2">
            <RenderTabsBTN
              state={tab}
              image={AdminPanelSettingsOutlinedIcon}
              onClick={() => handleClick(tab)}
              name={tab.documentName}
              className={
                tab?.id === _selectedID
                  ? "managementBTN__select"
                  : tab.isApprove
                  ? "managementBTN__approve"
                  : ""
              }
            />
            {/* <Button
              style={{ width: "280px" }}
              key={i}
              variant={tab?.id === _selectedID ? "contained" : "outlined"}
              value={tab.documentFilePath}

              onClick={(e) => handleClick(tab, e)}
              className={
                tab?.id === selectedDoc?.id
                  ? "managementBTN__select"
                  : "managementBTN__approve"
              }
            >
              {tab.documentName}
            </Button>{" "} */}
          </div>
        );
      })
    );
  };

  const renderFile = (_docs) => {
    if (_docs && _docs.documentType === "pdf") {
      return <ReaderPDF path={getFileURL(_docs.documentFilePath)} />;
    } else {
      return (
        <img
          alt=""
          src={_docs && getFileURL(_docs.documentFilePath)}
          width="100%"
        />
      );
    }
  };

  const handleApprove = () => {};

  return (
    <React.Fragment>
      <Section>
        <div className="popupBtn">
          <PopupButton />
        </div>
        <SectionRow className="flex items-start w-full justify-center ">
          <SectionRow className=" w-3/12  ">
            {renderTabs(doc.factoryDetailDocCollection || [])}
          </SectionRow>
          <SectionColumn className="w-6/12 ">
            {<ReaderPDF path={selectedFile?.documentFilePath || ""} />}
          </SectionColumn>
          {/* <SectionRow className="ml-28">
            {renderTabs(data)}
          </SectionRow>
          <SectionRow className="w-5/12 ">
            {<ReaderPDF path={selectedFile?.documentFilePath || ""} />}
          </SectionRow> */}
        </SectionRow>
        <SectionColumn className="flex items-center w-full ">
          <SectionRow className="w-8/12 justify-end">
            <RejectButton
              currentStep={5}
              nextRoute={"/approvalProcess/companyRegistration/step05"}
            />
            {/* <a href='http://localhost:3000/web/companyRegistration'> */}
            <AcceptButton
              pdfStatusArray={[false]}
              onApprove={() => {
                setOpenConfirm(true);
                window?.sessionStorage?.setItem("completedSteps", 5);
              }}
              label={true}
              nextBtnName="Finish"
            />

            <ConfirmPrompt
              handleClickOpen={() => setOpenConfirm(true)}
              handleClose={() => setOpenConfirm(false)}
              isOpen={openConfirm}
            />
            {/* </a> */}
            <RejectDialog
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              isOpen={open}
            />
          </SectionRow>
        </SectionColumn>
      </Section>
    </React.Fragment>
  );
};

export default RegApprovalProcessStep05;
