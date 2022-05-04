import React, { useEffect, useRef, useState } from "react";
import Section, { SectionColumn, SectionRow } from "../../../../../components/section";

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

// import BackImg from "../../../../public/assets/icons/back.svg";
import BrCertificateImg from "../../../../../assets/icons/br-certificate.svg";
import UploadDocImg from "../../../../../assets/icons/upload-doc.svg";
import FileUploadButton from "../../../../../components/buttons/FileUploadButton";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import PopupButton from "../../../../../components/buttons/PopupButton";
import RejectButton from "../../../../../components/buttons/rejectButton";

const pdfPaths = ["/pdf/sample1.pdf", "/pdf/sample2.pdf", "/pdf/sample3.pdf"];

const states = {
	"/pdf/sample1.pdf": false,
	"/pdf/sample2.pdf": false,
	"/pdf/sample3.pdf": false,
};

const RegApprovalProcessStep04 = (props) => {
	const [pdfPath, setPdfPath] = useState("");
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [pdfState, setPdfState] = useState(states);

	let checker = (arr) => arr.every((v) => v === true);

	useEffect(() => {
		props.setActiveStep(3);
	}, [props]);

	const handleSelectPdf = (_pdfPath) => {
		setPdfPath(_pdfPath);
		// pdfState[_pdfPath] = true;
	};

	const getStates = (_state) => {
		const arr = [];
		for (const property in _state) {
			console.log(`${property}: ${_state[property]}`);
			arr.push(_state[property]);
		}
		return arr;
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
		// history.push("/approvalProcess/companyRegistration/step02");
		props.handleComplete();
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
				<div className='popupBtn'>
					<PopupButton />
				</div>
				<SectionRow className='w-1/12'></SectionRow>
				<SectionRow className='w-4/12 flex'>
					<SectionColumn>
						<span class='BusinessRegistrationText'>Authorized Person Info</span>
						<span class='Checked-and-Approvel-by'>Checked and approved by:</span>
						<span class='userName'>Mr.Herath (CRO)</span>
						<SectionRow className='mb-5'>
							<span className='dateAndTime'>2021.12.08 &nbsp;&nbsp;</span>
							<span className='dateAndTime'>10:40AM</span>
						</SectionRow>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Full Name</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>Sunil Kumara</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Designation</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>Export Manager</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>NIC</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>950238674V</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>email</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>sunilkumara@gmail.com</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Mobile Number</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>+94 71959259</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Telephone Number</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>+94 11256545</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Fax Number</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>+94 15121254</div>
						</div>
						<div className='docButton-wrapper'>
							<div></div>
						</div>
					</SectionColumn>
				</SectionRow>
				<SectionRow className='w-1/12'></SectionRow>
				<SectionRow className='w-4/12 flex'>
					<SectionColumn>
						<span class='BusinessRegistrationText'>Contact Person Info</span>
						<span class='Checked-and-Approvel-by'>Checked and approved by:</span>
						<span class='userName'>Mr.Herath (CRO)</span>
						<SectionRow className='mb-5'>
							<span className='dateAndTime'>2021.12.08 &nbsp;&nbsp;</span>
							<span className='dateAndTime'>10:40AM</span>
						</SectionRow>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Full Name</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>Nimal Perera</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Designation</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>Export Manager</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>NIC</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>923433125V</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>email</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>nimalperera123@gmail.com</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Mobile Number</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>+94 701256738</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Telephone Number</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>+94 115698653</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Fax Number</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>+94 15121255</div>
						</div>

						<div className='docButton-wrapper'>
							<div></div>
						</div>
					</SectionColumn>
				</SectionRow>
				<div className='grid justify-items-center mt-5 mb-10 ml-80'></div>
				<SectionRow className='w-full'>
					<SectionColumn className='w-6/12'></SectionColumn>
					<SectionColumn className='w-4/12 items-end'>
						<div className='flex'>
							<RejectButton
								onClick={handleClickOpen}
								handleClickOpen={handleClickOpen}
								handleClose={handleClose}
								open={open}
							/>
							<AcceptButton
								pdfStatusArray={[true]}
								onApprove={handleApprove}
								step='step05'
								label={checker(getStates(pdfState))}
							/>
						</div>
					</SectionColumn>
				</SectionRow>
			</Section>
		</React.Fragment>
	);
};

export default RegApprovalProcessStep04;
