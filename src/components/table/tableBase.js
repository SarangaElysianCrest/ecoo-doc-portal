import * as React from "react";
import { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Button, Chip } from "@material-ui/core";
import viewIcon from "../../assets/images/DocImage/viewIcon.png";
import Eye from "@mui/icons-material/Visibility";
import CustomStyleTable from "./customStyleTable";
import BusinessIcon from "@mui/icons-material/Business";

const TableBase = (props) => {
	// const columns1 = ["Name", "Company", "City", "State","Action"];

	const columns = [
		{
			name: "companyName",
			label: "Company Name",
			options: {
				filter: false,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div>
						<BusinessIcon />
						&nbsp;&nbsp;&nbsp;
						{data[dataIndex][0]}
					</div>
				),
			},
		},
		{
			name: "brn",
			label: "BRN",
			options: {
				filter: false,
			}
		},
		{
			name: "date&time",
			label: "Date & Time",
			options: {
				filter: false,
				sort: true,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-start'>
						{data[dataIndex][2]}&nbsp;-&nbsp;{data[dataIndex][3]}
					</div>
				),
			},
		},
		{
			name: "destinationCountry",
			label: "Destination Country",
			options: {
				filter: false,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-center'>{data[dataIndex][4]}</div>
				),
			},
		},
		{
			name: "e",
			label: "HSCode",
			options: {
				filter: true,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-start ml-4'>{data[dataIndex][5]}</div>
				),
			},
		},
		{
			name: "contactPerson",
			label: "Contact Person",
			options: {
				filter: false,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-start text-center'>
						<div>
							<div>{data[dataIndex][6][0]}</div>
							<div>({data[dataIndex][6][1]})</div>
						</div>
					</div>
				),
			},
		},
		{
			name: "status",
			label: "Status",
			options: {
				filter: false,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-center'>
						{data[dataIndex][7] === "Pending" ? (
							<Chip label={data[dataIndex][7]} className='pending' size='small' />
						) : data[dataIndex][7] === "Rejected" ? (
							<Chip label={data[dataIndex][7]} className='fail' size='small' />
						) : (
							<Chip label={data[dataIndex][7]} className='success' size='small' />
						)}
					</div>
				),
			},
		},
		{
			name: "action",
			label: "Action",
			options: {
				filter: true,
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='justify-center flex '>
						<Eye
							onClick={() => {
								let id = data[dataIndex][3];
								window.open(`/approvalProcess/companyRegistration/step01?id=${id}`);
							}}></Eye>
					</div>
				),
			},
		},
	];

	const data = [
		[
			"Meezan Tea",
			"353205172376",
			"2022/04/28",
			"13.58",
			"Russia",
			"124885",
			["Ramzi Mohomad",
			"0774567234"],
			"Rejected",
		],
		[
			"Empire Teas ",
			"353205172345",
			"2022/05/01",
			"15.32",
			"India",
			"125142",
			["Suran Perera",
			"0774568645"],
			"Approved",
		],
		[
			"Expolanka(Pvt)",
			"354005172346",
			"2022/05/03",
			"08.23",
			"America",
			"920192",
			["Kamal Blasooriya",
			"0774573648"],
			"Approved",
		],
		[
			"Hayleys  PLC",
			"202005176845",
			"2022/05/04",
			"10.37",
			"Singapore",
			"921040",
			["Nimal Perera",
			"0774567389"],
			"Pending",
		],
	];

	const options = {
		filterType: "checkbox",
		elevation: 1,
		selectableRowsHideCheckboxes: true,
		download: false,
		print: false,
	};

	// CSS - table-base contains in styles.scss
	return (
		<>
			<div className='table-base'>
				<MUIDataTable
					title={"Registration Requests List"}
					data={data}
					columns={columns}
					options={options}
				/>
				{/* <CustomStyleTable>
        </CustomStyleTable> */}
			</div>
		</>
	);
};

export default TableBase;
