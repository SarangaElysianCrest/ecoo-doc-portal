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
import PopupButton from "../../../../../components/buttons/PopupButton";
import testImage from "./../../../../../assets/images/The-Process-Flow-Chart-of-JS-factory.png";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import RejectButton from "../../../../../components/buttons/rejectButton";

const pdfPaths = ["/pdf/sample1.pdf", "/pdf/sample2.pdf", "/pdf/sample3.pdf"];
const states = {
  "/pdf/sample1.pdf": false,
  "/pdf/sample2.pdf": false,
  "/pdf/sample3.pdf": false,
};

const RegApprovalProcessStep05 = (props) => {
  const [pdfPath, setPdfPath] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [pdfState, setPdfState] = useState(states);
  const [openConfirm, setOpenConfirm] = useState(false);

  useEffect(() => {
    props.setActiveStep(4);
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
    history.push("/web/companyRegistration");
  };

  const handleReject = () => {
    handleClickOpen();
  };

  const handleApprove = () => {
    console.log(">>>>>>", pdfState);
    setPdfState({ ...pdfState, [pdfPath]: true });
  };

  return (
    <React.Fragment>
      <Section>
        <div className="popupBtn">
          <PopupButton />
        </div>
        <SectionColumn className="flex items-center w-full ">
          <SectionRow className="flex items-center w-5/12">
            <img src={testImage} width="100%" />
          </SectionRow>

          <SectionRow className="w-8/12 justify-end">
            <RejectButton
              onClick={handleClickOpen}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              open={open}
            />
            {/* <a href='http://localhost:3000/web/companyRegistration'> */}
            <AcceptButton
              pdfStatusArray={[false]}
              onApprove={() => setOpenConfirm(true)}
              // // step='step05'
              label={true}
              name="Finish"
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
