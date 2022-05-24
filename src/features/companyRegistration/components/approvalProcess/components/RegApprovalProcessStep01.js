import React, { useState, useEffect } from "react";
import Section, { SectionColumn, SectionRow } from "../../../../../components/section";

// import BackImg from "../../../../public/assets/icons/back.svg";
import UploadDocImg from "../../../../../assets/icons/upload-doc.svg";
import FileUploadButton from "../../../../../components/buttons/FileUploadButton";
import AcceptButton from "../../../../../components/buttons/acceptbutton";
import PopupButton from "../../../../../components/buttons/PopupButton";
import RejectButton from "../../../../../components/buttons/rejectButton";
import { checker, updateStatus } from "../../../../../Helpers/uiHelper";
import ReaderPDF from "../../../../../components/pdfPreview/readerPDF";
import { APPROVED, SELECT, DEFAULT } from "../../../../../Helpers/constants";
import { callAPI } from "../../../../../app/helper/useAPI";
import { getFromStep1_adapter } from "../../../../../app/api/adapter";
import { companyID } from "../RegApprovalProcessHome";
import { getFileURL } from "../../../../../app/api/file_api";
import { REG_APPROVAL } from "../../../../../app/routes";

const _state = [{ id: "1001", path: "/pdf/Cd.pdf", isApprove: "DEFAULT" }];

const RegApprovalProcessStep01 = (props) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [stateFile, setStateFile] = useState(_state);
	const [open, setOpen] = useState(false);
	const [approved, setApproved] = useState([]);
	const [data, setData] = useState();

	useEffect(() => {
		props.setActiveStep(0);
		sessionStorage.setItem("currentStep", 0);
	}, [props]);

	useEffect(() => {
		callAPI(() => getFromStep1_adapter(companyID), setData);
	}, []);

	useEffect(() => {
		if (data) {
			let brn = getFileURL(data[0]?.draftCostStatementOrAffidavitFilePath);
			const files = [{ id: "1001", path: brn, isApprove: "DEFAULT" }];
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
			sessionStorage.setItem("completedSteps", 1);
		}
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
						<span class='BusinessRegistrationText'>Product Information</span>
						<span class='Checked-and-Approvel-by'>Checked and approved by :</span>
						<span class='userName'>Mr.Herath (CRO)</span>
						<SectionRow className='mb-5'>
							<span className='dateAndTime'>2021.12.08 &nbsp;&nbsp;</span>
							<span className='dateAndTime'>10:40AM</span>
						</SectionRow>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Product Name</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>{data && data[0]?.productName}</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Product Category</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>{data && data[0]?.productCategory}</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>HS Code</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>{data && data[0]?.hsCode}</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Destination</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>{data && data[0]?.destination}</div>
						</div>
						<div className='Rectangle-1 flex-row flex'>
							<div className=' w-4/12  m-1 Business-Name'>Agreement</div>
							<div className=' w-1/12  m-1 Business-Name'>:</div>
							<div className=' w-7/12  m-1 Business-Name'>{data && data[0]?.tradeAgreement}</div>
						</div>

						<div className='docButton-wrapper'>
							<div className='mt-1'>
								<SectionRow>
									<FileUploadButton
										image={UploadDocImg}
										btnName='Draft Cost Statement or Affidavits'
										className='mr-12 ml-12'
										onClick={handleSelectPdf}
										isSelected={"TIN"}
										state={getByID("1001")}
									/>
								</SectionRow>
							</div>
							<div></div>
						</div>
					</SectionColumn>
				</SectionRow>
				<SectionRow className='w-5/12 '>{<ReaderPDF path={selectedFile?.path || ""} />}</SectionRow>
				<SectionRow className='w-full  h-16'>
					<SectionColumn className='w-6/12'></SectionColumn>
					<SectionColumn className='w-6/12'>
						<SectionRow className='w-10/12 justify-end'>
							<RejectButton currentStep={1} nextRoute={REG_APPROVAL.step02} />
							<AcceptButton
								pdfStatusArray={getStates(_state)}
								onApprove={handleApprove}
								step='step02'
								label={checker(getStates(_state))}
								nextBtnName='Next'
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
