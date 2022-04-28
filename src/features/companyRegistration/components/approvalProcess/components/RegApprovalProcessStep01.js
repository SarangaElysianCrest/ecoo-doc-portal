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

const pdfPaths = ["/pdf/sample1.pdf", "/pdf/sample2.pdf", "/pdf/sample3.pdf"];

const RegApprovalProcessStep01 = () => {
  const [pdfPath, setPdfPath] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleSelectPdf = (_pdfPath) => {
    setPdfPath(_pdfPath);
  };

  const getPdfInstance = (path) => {
    switch (path) {
      case pdfPaths[0]:
        return <PDFView01 path={pdfPaths[0]} />;
      case pdfPaths[1]:
        return <PDFView02 path={pdfPaths[1]} />;
      case pdfPaths[2]:
        return <PDFView03 path={pdfPaths[2]} />;
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
    history.push("/approvalProcess/companyRegistration/step02");
  };

  const handleReject = () => {
    handleClickOpen();
  };

  return (
    <React.Fragment>
      <Section>
        <SectionRow className="w-1/12"></SectionRow>
        <SectionRow className="w-4/12 flex justify-center items-center">
          <SectionColumn className="p-5 shadow-gray-500 shadow-md rounded-2xl">
            <SectionRow>
              <span className="card-1-heading">
                Business Name: &nbsp;&nbsp;
              </span>
              <span>MAS Holdings</span>
            </SectionRow>
            <SectionRow className="mt-2">
              <span className="card-1-heading">
                Business Type: &nbsp;&nbsp;
              </span>
              <span>(pvt) Ltd</span>
            </SectionRow>
            <SectionRow className="mt-2">
              <span className="card-1-heading">
                Business Address: &nbsp;&nbsp;
              </span>
              <span>Colombo</span>
            </SectionRow>
            <div className="docButton-wrapper">
              <FileViewButton
                image={<AssignmentIndIcon />}
                text={"BR Cirtificate"}
                onClick={handleSelectPdf}
                path={pdfPaths[0]}
              />
              <FileViewButton
                image={<AssignmentIndIcon />}
                text={"TIN"}
                onClick={handleSelectPdf}
                path={pdfPaths[1]}
              />
              <FileViewButton
                image={<AssignmentIndIcon />}
                text={"VAT"}
                onClick={handleSelectPdf}
                path={pdfPaths[2]}
              />
              <div>
                <SectionRow>
                  <RoundedButton
                    ref={undefined}
                    onClick={handleAccept}
                    className="pdfAcceptBTN"
                    type="submit"
                  >
                    Accept
                  </RoundedButton>
                  <RoundedButton
                    ref={undefined}
                    onClick={handleReject}
                    className="pdfRejectBTN ml-5"
                    type="submit"
                  >
                    Reject
                  </RoundedButton>
                  <RejectDialog
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    isOpen={open}
                  />
                </SectionRow>
              </div>
            </div>
          </SectionColumn>
        </SectionRow>
        <SectionRow className="w-6/12">{getPdfInstance(pdfPath)}</SectionRow>

        <div className="grid justify-items-center mt-5 mb-10 ml-80"></div>
      </Section>
    </React.Fragment>
  );
};

export default RegApprovalProcessStep01;
