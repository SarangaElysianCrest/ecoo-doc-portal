import React from "react";
import StatCard from "../../components/cards/statCard";
import { SectionColumn, SectionRow } from "../../components/section";
import TableBase from "../../components/table/tableBase";
import { getCompanyRegDetailsByStatus } from "../../app/api/core_api";
import { getCompanyRegStatus } from "../../app/api/core_api";
import Eye from "@mui/icons-material/Visibility";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { regApprovalStepsRoutes } from "../../app/routes";
import Avatar from "@mui/material/Avatar";
import { Table } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import loadingGif from "../../assets/images/Icons/loadingGif.gif";
import PromptBase from "../../components/model/promptBase";
import { tailMock } from "../../app/api/mock/registration";

let currentCompanies = [];
let selectStatCard = 1;
class CompanyRegisrationHome extends React.Component {
	constructor() {
		super();
		this.container = React.createRef();
		this.state = {
			selectedStatCard: "PENDING",
			companiesArray: [],
			pendingCount: '',
			resubCount: '',
			completedCount: '',
			rejectedCount: '',
			currentPage: 0,
			rowsPerPage: 5,
			currentTotalCount: "",
			maxPages: "",
			searchFilter: "",
			resultFetched: false,
			isOpen:false,
		};
	}

	componentDidMount = async () => {
		let responseCount = {};

		await getCompanyRegStatus().then((resCount) => {
			responseCount = resCount;
			console.log("resCount", resCount);
			console.log("responseCount", responseCount);
		});

		await this.setState({
			pendingCount: responseCount
			// pendingCount: responseCount.pendingCount,
			// resubCount: responseCount.resubmissionCount,
			// completedCount: responseCount.completedCount,
			// currentTotalCount: responseCount.pendingCount,
			// rejectedCount: responseCount.rejectedCount,
		});
		if (this.state.companiesArray.length == 0) {
			await this.getResponce();
			console.log("currentTotalCount", this.state.currentTotalCount);
			await this.totalPagesCounter();
		}
	};

	getResponce = async () => {
		let response = {};

		await this.setState({
			companiesArray: [],
		});

		let params = {
			page: this.state.currentPage,
			size: this.state.rowsPerPage,
		};

		await getCompanyRegDetailsByStatus(this.state.selectedStatCard, params).then((res) => {
			response = res.data;
			console.log("res", res);
			console.log("response", response);
		});

		await this.setState({
			companiesArray: response,
		});
	};

	statCard = async (string) => {
		await this.setState({
			selectedStatCard: string,
			currentPage: 0,
		});

		if (string == "PENDING") {
			await this.setState({
				currentTotalCount: this.state.pendingCount,
			});
		} else if (string == "RESUBMISSION") {
			await this.setState({
				currentTotalCount: this.state.resubCount,
			});
		} else if (string == "REJECTED") {
			await this.setState({
				currentTotalCount: this.state.rejectedCount,
			});
		} else {
			await this.setState({
				currentTotalCount: this.state.completedCount,
			});
		}
		console.log("selectedStatCard", this.state.selectedStatCard);
		console.log("currentTotalCount", this.state.currentTotalCount);

		await this.getResponce();
		await this.totalPagesCounter();
	};

	rowsPerPageHandler = async (e) => {
		await this.setState({
			rowsPerPage: e.target.value,
			currentPage: 0,
		});

		// call get responce
		console.log("rowsPerPage", this.state.rowsPerPage);
		console.log("currentPage", this.state.currentPage);

		await this.getResponce();
		await this.totalPagesCounter();
	};

	prevPageHandler = async () => {
		if (this.state.currentPage > 0) {
			await this.setState({
				currentPage: this.state.currentPage - 1,
			});
		}

		// call get responce
		console.log("currentPage", this.state.currentPage);

		await this.getResponce();
	};

	nextPageHandler = async () => {
		// if (this.state.currentPage <= totalPages) {
		await this.setState({
			currentPage: this.state.currentPage + 1,
		});
		// }

		// call get responce
		console.log("currentPage", this.state.currentPage);

		await this.getResponce();
	};

	searchEventsHandler = async (title) => {
		await this.setState({
			searchFilter: title,
		});
		console.log("searchFilter", this.state.searchFilter);
	};

	totalPagesCounter = async () => {
		let totalPages = "";
		if (this.state.currentTotalCount % this.state.rowsPerPage > 0) {
			totalPages = Math.floor(this.state.currentTotalCount / this.state.rowsPerPage) + 1;
		} else {
			totalPages = Math.floor(this.state.currentTotalCount / this.state.rowsPerPage);
		}

		console.log("totalPages", totalPages);
		await this.setState({
			maxPages: totalPages,
		});
	};

	render() {
		currentCompanies = this.state.companiesArray;

		const filteredData =
			currentCompanies &&
			currentCompanies.filter(
				(obj) =>
					obj.businessName.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) !== -1
			);
		currentCompanies = filteredData;
		let showingPage = this.state.currentPage + 1;
		const setSelectStatCard = (num) => {
			selectStatCard = num;
		};

		return (
			<div>
				<SectionRow className='mb-5'>
					<span className='heading-1'>Company Registration</span>
				</SectionRow>
				<SectionRow className='flex-wrap section-row-1 mb-6 sm:mb-0 dashboard-row'>
					<StatCard
						value={this.state.pendingCount}
						text={"New Registration Requests"}
						image={"https://img.icons8.com/ios/50/3054EA/new-company.png"}
						accent={"#E6E9FF"}
						handleStatCard={() => this.statCard("PENDING")}
						num={1}
						selected={selectStatCard}
						setSelectStatCard={setSelectStatCard}
					/>
					<StatCard
						value={this.state.resubCount}
						text={"Resubmitted Registration Requests"}
						image={"https://img.icons8.com/ios-filled/50/FFBA32/submit-progress.png"}
						accent={"#FFF5D2"}
						handleStatCard={() => this.statCard("RESUBMISSION")}
						num={2}
						selected={selectStatCard}
						setSelectStatCard={setSelectStatCard}
					/>
					<StatCard
						value={this.state.completedCount}
						text={"Completed Registration Requests"}
						image={"https://img.icons8.com/material-outlined/50/6EEDA8/checkmark--v1.png"}
						accent={"#E3FEF3"}
						handleStatCard={() => this.statCard("COMPLETED")}
						num={3}
						selected={selectStatCard}
						setSelectStatCard={setSelectStatCard}
					/>
					<StatCard
						value={this.state.rejectedCount}
						text={"Rejected Registration Requests"}
						image={"https://img.icons8.com/office/50/000000/delete-sign.png"}
						accent={"#ffcdd2"}
						handleStatCard={() => this.statCard("REJECTED")}
						num={4}
						selected={selectStatCard}
						setSelectStatCard={setSelectStatCard}
					/>
				</SectionRow>
				<div className='companyRegTbleContainer'>
					<Grid container>
						<Grid item xs={8} style={{ borderTopLeftRadius: "15px" }} className='tableHeaderItem'>
							<Chip icon={<HowToRegIcon />} label='Registration Requests List' />
						</Grid>
						<Grid
							item
							xs={4}
							style={{ borderTopRightRadius: "15px" }}
							className='tableHeaderSearch'>
							<input
								placeholder='Search by Company Name'
								className='searchIconText'
								onChange={(e) => this.searchEventsHandler(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Table responsive>
						<thead>
							<tr>
								<th style={{ minWidth: "140px", verticalAlign: "initial" }} className='thBtn'>
									Company Name
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									BRN{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									TIN{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									Date and Time{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									Destination{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									HS Code{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									Contact Person{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									Action{" "}
								</th>
								<th style={{ verticalAlign: "initial" }} className='thBtn'>
									Action{" "}
								</th>
							</tr>
						</thead>
						{/* {this.state.currentTotalCount === 0 ? (
							<tbody className='tbody'>
								<tr align='center'>
									<td colSpan='12'>
										<br />
										<div style={{ fontSize: "10px", fontWeight: "bold" }}>
											{" "}
											No Company Details Found{" "}
										</div>
									</td>
								</tr>
							</tbody>
						) : ( */}
							<tbody className='tbody'>
								{currentCompanies.length === 0 ? (
									<tr align='center'>
										<td colSpan='12'>
											<br />
											<div style={{ fontSize: "10px" }}> No Company Details Found </div>
											{/* <img src={loadingGif} alt="loading..." /> */}
										</td>
									</tr>
								) : (
									currentCompanies.map((s, i) => (
										<tr key={s.id}>
											<td className={currentCompanies.length === i + 1 ? "tdLastStart" : "tdStart"}>
												<BusinessIcon />
												&nbsp;&nbsp;&nbsp;
												{s.businessName ? s.businessName : "-"}
											</td>
											<td className='tdStart'>{s.brNumber ? s.brNumber : "-"}</td>
											<td className='tdStart'>{s.tin ? s.tin : "-"}</td>
											<td className='tdStart'>{s.createdDate ? s.createdDate : "-"}</td>
											<td className='tdStart'>{s.destination ? s.destination : "-"}</td>
											<td className='tdStart'>{s.hsCode ? s.hsCode : "-"}</td>
											<td className='tdStart'>
												{s.fullName ? s.fullName : "-"}
												<br />
												{s.mobile ? "(" + s.mobile + ")" : "-"}
											</td>

											<td className='tdStart'>
												<div className='justify-center flex '>
													<Eye
														onClick={() => {
															let id = s.companyId;
															let status = s.status;
															sessionStorage.clear();
															localStorage.setItem("ID", id);
															localStorage.setItem("REJECT", []);
															window.open(regApprovalStepsRoutes + `step01?id=${id}`);
														}}></Eye>
												</div>
											</td>
											<td className={currentCompanies.length === i + 1 ? "tdLastEnd" : "tdStart"}>
												<div className='justify-center flex '>
													<ArrowBackIosIcon onClick={()=>{
														this.setState({isOpen:true})
														console.log('>>>>>>>>>>>>>>',this.state.isOpen);
													}}
														></ArrowBackIosIcon>
												</div>
											</td>
										</tr>
									))
								)}
							</tbody>
						{/* )} */}
					</Table>
					<Grid container>
						<Grid
							item
							xs={7}
							style={{ borderBottomLeftRadius: "15px" }}
							className='paginationItem'></Grid>
						<Grid item xs={2} className='paginationItem'>
							<div>
								<label style={{ margin: "0px" }}> Rows per page  </label>
								<select
									className='perPage'
									style={{ cursor: "pointer" }}
									name='size'
									id='size'
									onChange={this.rowsPerPageHandler.bind(this)}>
									<option label='5' value='5' />
									<option label='10' value='10' />
									<option label='25' value='25' />
								</select>
							</div>
						</Grid>
						{/* <Grid item xs={2} className="paginationItem">
              <label>
                <>Showing Page</>&nbsp;
                <>{this.state.currentPage + 1}</>
              </label>
            </Grid> */}
						<Grid
							item
							xs={3}
							style={{ borderBottomRightRadius: "15px" }}
							className='paginationItem'>
							<div>
								{this.state.currentPage <= 0 ? (
									<ArrowBackIosIcon
										style={{ fontSize: "medium" }}
										color='disabled'></ArrowBackIosIcon>
								) : (
									<ArrowBackIosIcon
										style={{ fontSize: "medium" }}
										onClick={() => {
											this.prevPageHandler();
										}}></ArrowBackIosIcon>
								)}
								<Chip label={"Showing Page " + showingPage} color='primary' size='small' />
								{this.state.maxPages > this.state.currentPage + 1 ? (
									<ArrowForwardIosIcon
										style={{ fontSize: "medium" }}
										onClick={() => {
											this.nextPageHandler();
										}}></ArrowForwardIosIcon>
								) : (
									<ArrowForwardIosIcon
										style={{ fontSize: "medium" }}
										color='disabled'></ArrowForwardIosIcon>
								)}
							</div>
						</Grid>
					</Grid>
				</div>
				<PromptBase data={tailMock} isOpen={this.state.isOpen} handleDismiss={()=> this.setState({isOpen:false})}/>
				<SectionRow className='flex-wrap section-row-1 dashboard-row'>
					<SectionColumn className='w-full   relative '></SectionColumn>
				</SectionRow>
			</div>
		);
	}
}

export default CompanyRegisrationHome;
