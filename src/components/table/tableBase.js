import React, { useEffect, useState } from "react";
import { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Button, Chip } from "@material-ui/core";
import viewIcon from "../../assets/images/DocImage/viewIcon.png";
import Eye from "@mui/icons-material/Visibility";
import CustomStyleTable from "./customStyleTable";
import BusinessIcon from "@mui/icons-material/Business";
import axios from "axios";
import { getCompanyRegDetailsByStatus } from "../../app/api/core_api";
import { regApprovalStepsRoutes } from "../../app/routes";

const TableBase = ({ selectedCard }) => {
  const [companies, setCompanies] = useState();


  // send selectedCard id
  const getResponce = async () => {
    let allCompanyData = [];
    await getCompanyRegDetailsByStatus().then((res) => {
      console.log("res", res);
      res.data.map((c) => {
        let dataC = {};
        dataC.businessName = c.businessName;
        dataC.brNumber = c.brNumber;
        dataC.createdDate = c.createdDate;
        dataC.destination = c.destination;
        dataC.hsCode = c.hsCode;
        dataC.fullName = c.fullName;
        dataC.mobile = c.mobile;
        dataC.tin = c.tin;
        allCompanyData.push(dataC);
      });
      setCompanies(allCompanyData);
      console.log("companies", companies);
      console.log("allCompanyData", allCompanyData);
    });
  };

  // TODO - update columns and data according to selected statCard by prop
  const columns = [
    {
      name: "companyName",
      label: "Company Name",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div className="flex">
            <BusinessIcon />
            &nbsp;&nbsp;
            <div>{data[dataIndex][0]}</div>
          </div>
        ),
      },
    },
    {
      name: "brn",
      label: "BRN",
      options: {
        filter: false,
      },
    },
    {
      name: "tin",
      label: "TIN",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div className="flex justify-center">{data[dataIndex][7]}</div>
        ),
      },
    },
    {
      name: "date&time",
      label: "Date & Time",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div className="flex justify-start">
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
          <div className="flex justify-center">{data[dataIndex][4]}</div>
        ),
      },
    },
    {
      name: "e",
      label: "HSCode",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div className="flex justify-start ml-4">{data[dataIndex][5]}</div>
        ),
      },
    },
    {
      name: "contactPerson",
      label: "Contact Person",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div className="flex justify-start text-center">
            <div>
              <div>{data[dataIndex][6][0]}</div>
              <div>({data[dataIndex][6][1]})</div>
            </div>
          </div>
        ),
      },
    },
    // {
    //   name: "status",
    //   label: "Status",
    //   options: {
    //     filter: false,
    //     customBodyRenderLite: (dataIndex, rowIndex) => (
    //       <div className="flex justify-center">
    //         {data[dataIndex][7] === "Pending" ? (
    //           <Chip
    //             label={data[dataIndex][7]}
    //             className="pending"
    //             size="small"
    //           />
    //         ) : data[dataIndex][7] === "Rejected" ? (
    //           <Chip label={data[dataIndex][7]} className="fail" size="small" />
    //         ) : (
    //           <Chip
    //             label={data[dataIndex][7]}
    //             className="success"
    //             size="small"
    //           />
    //         )}
    //       </div>
    //     ),
    //   },
    // },
    {
      name: "action",
      label: "Action",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div className="justify-center flex ">
            <Eye
              onClick={() => {
                let id = data[dataIndex][3];
                window.open(regApprovalStepsRoutes + `step01?id=${id}`);
              }}
            ></Eye>
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
      "India",
      "124885",
      ["Ramzi Mohomad", "0774567234"],
      "346765",
    ],
    [
      "Empire Teas ",
      "353205172345",
      "2022/05/01",
      "15.32",
      "India",
      "125142",
      ["Suran Perera", "0774568645"],
      "246765",
    ],
    [
      "Expolanka(Pvt)",
      "354005172346",
      "2022/05/03",
      "08.23",
      "USA",
      "920192",
      ["Kamal Blasooriya", "0774573648"],
      "446765",
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
      <div className="table-base">
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
