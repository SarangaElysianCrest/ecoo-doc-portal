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

const pdfPaths = ["/pdf/sample1.pdf"];

const states = {
	"/pdf/sample1.pdf": false,
};
let checker = (arr) => arr.every((v) => v === true);

const RegApprovalProcessStep01 = (props) => {
	const [pdfPath, setPdfPath] = useState("");
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [pdfState, setPdfState] = useState(states);

	useEffect(() => {
		props.setActiveStep(0);
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
		console.log(">>>>>>", pdfState);
		setPdfState({ ...pdfState, [pdfPath]: true });
	};

	return (
		<React.Fragment>
			<Section>
				<div className='popupBtn'>
					<PopupButton />
				</div>
				<SectionRow className='w-1/12 '></SectionRow>

				<SectionRow className='w-4/12 flex'>
					<SectionColumn>
						<span class='BusinessRegistrationText'>Product Infomation</span>
						<span class='Checked-and-Approvel-by'>Checked and Approvel by:</span>
						<span class='userName'>Mr.Herath (CRO)</span>
						<SectionRow className='mb-5'>
							<span className='dateAndTime'>2021.12.08 &nbsp;&nbsp;</span>
							<span className='dateAndTime'>10:40AM</span>
						</SectionRow>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Product Name</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>Fibre Brush</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Product Catagory</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>Non-Wholly</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>HS Code</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>560212</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Destination</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>India</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Agreement</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>SAFTA</div>
						</div>

						<div className='docButton-wrapper'>
							<div className='mt-1'>
								<SectionRow>
									<FileUploadButton
										image={BrCertificateImg}
										btnName='Cost Statment'
										onClick={handleSelectPdf}
										path={pdfPaths[0]}
										isSelected={"BR Certificate"}
										state={pdfState["/pdf/sample1.pdf"]}
									/>
								</SectionRow>
							</div>
							<div></div>
						</div>
					</SectionColumn>
				</SectionRow>
				<SectionRow className='w-5/12'>{getPdfInstance(pdfPath)}</SectionRow>
				<SectionRow className='w-full  h-16'>
					<SectionColumn className='w-6/12'></SectionColumn>
					<SectionColumn className='w-6/12'>
						<SectionRow className='w-10/12 justify-end'>
							<RejectButton
								onClick={handleClickOpen}
								handleClickOpen={handleClickOpen}
								handleClose={handleClose}
								open={open}
							/>
							<AcceptButton
								pdfStatusArray={getStates(pdfState)}
								onApprove={handleApprove}
								step='step02'
								label={checker(getStates(pdfState))}
							/>
						</SectionRow>
					</SectionColumn>
				</SectionRow>

				<div className='grid justify-items-center mt-5 mb-10 ml-80'></div>
			</Section>
		</React.Fragment>
	);
};

export default RegApprovalProcessStep01;
