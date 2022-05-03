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
			name: "a",
			label: "Company Name",
			options: {
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
			name: "b",
			label: "BRN",
		},
		{
			name: "c",
			label: "Address",
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: "d",
			label: "HS Code",
			options: {
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-center'>{data[dataIndex][3]}</div>
				),
			},
		},
		{
			name: "e",
			label: "Contact Person",
			options: {
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-center text-center'>
						<div>
							<div>{data[dataIndex][4]}</div>
							<div>({data[dataIndex][5]})</div>
						</div>
					</div>
				),
			},
		},
		{
			name: "f",
			label: "Status",
			options: {
				customBodyRenderLite: (dataIndex, rowIndex) => (
					<div className='flex justify-center'>
						{data[dataIndex][6] === "Pending" ? (
							<Chip label={data[dataIndex][6]} className='pending' size='small' />
						) : data[dataIndex][6] === "Rejected" ? (
							<Chip label={data[dataIndex][6]} className='fail' size='small' />
						) : (
							<Chip label={data[dataIndex][6]} className='success' size='small' />
						)}
					</div>
				),
			},
		},
		{
			name: "action",
			label: "Action",
			options: {
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
			"Hayleys  PLC",
			"202005176845",
			"25 Foster Ln, Colombo 00100",
			"921040",
			"Nimal Perera",
			"0774567389",
			"Pending",
		],
		[
			"Expolanka(Pvt)",
			"354005172346",
			"390/Avissawella rd, Orugodawatte",
			"920192",
			"Kamal Blasooriya",
			"0774573648",
			"Approved",
		],
		[
			"Empire Teas ",
			"353205172345",
			"190/1 Kelanimulla, Angoda",
			"125142",
			"Suran Perera",
			"0774568645",
			"Approved",
		],
		[
			"Meezan Tea",
			"353205172376",
			"366, 10 Avissawella Rd, Wellampitiya",
			"124885",
			"Ramzi Mohomad",
			"0774567234",
			"Rejected",
		],
	];

	const options = {
		filterType: "checkbox",
		elevation: 1,
		selectableRowsHideCheckboxes: true,
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
