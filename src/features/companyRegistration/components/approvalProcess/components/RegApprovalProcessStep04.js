import React, { useEffect, useRef, useState } from "react";
import Section, {
  SectionColumn,
  SectionRow,
} from "../../../../../components/section";

import PDFView01 from "../../../../../components/pdfPreview/pdfView01";
import RoundedButton from "../../../../../components/buttons/RoundedButtons";
import FileViewButton from "../../../../../components/buttons/fileViewButton";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useHistory } from "react-router-dom";
import ConfirmPrompt from "../../../../../components/alerts/confirmPrompt";
import RejectDialog from "../../../../../components/alerts/rejectPrompt";
import InfoCard from "../../../../../components/cards/infoCard";
import NpPdf from "../../../../../components/pdfPreview/NoPdf";

import testImage from "./../../../../../assets/images/test-flow-chart.png";

const pdfPaths = ["/pdf/sample1.pdf", "/pdf/sample2.pdf", "/pdf/sample3.pdf"];

const RegApprovalProcessStep04 = () => {
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
    history.push("/web/companyRegistration");
  };

  const handleReject = () => {
    handleClickOpen();
  };

  return (
    <React.Fragment>
      <Section>
        <SectionColumn className="flex items-center w-full ">
          <SectionRow className="flex items-center w-5/12">
            <img src={testImage} width="100%" />
          </SectionRow>

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
        </SectionColumn>
      </Section>
    </React.Fragment>
  );
};

export default RegApprovalProcessStep04;
