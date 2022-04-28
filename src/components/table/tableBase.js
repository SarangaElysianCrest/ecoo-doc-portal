import * as React from "react";
import { Component } from "react";
import MUIDataTable from "mui-datatables";
import viewIcon from "../../assets/images/DocImage/viewIcon.png";

const TableBase = (props) => {
  // const columns1 = ["Name", "Company", "City", "State","Action"];

  const getAction = () => {
    return (
      <u>
        <button
          className="link"
          onClick={() => {
            window.open(`/approvalProcess/companyRegistration/step01`);
          }}
        >
          {" "}
          <img src={viewIcon} className="h-7 w-7  ml-6" alt="" />
          <span className="ml-5">view</span>
        </button>
      </u>
    );
  };

  const columns = [
    {
      name: "a",
      label: "Company Name",
    },
    {
      name: "b",
      label: "Person Name",
    },
    {
      name: "c",
      label: "BRN",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "d",
      label: "HS Code",
    },
    {
      name: "action",
      label: "Action",
    },
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY", getAction()],
    ["John Walsh", "Test Corp", "Hartford", "CT", getAction()],
    ["Bob Herm", "Test Corp", "Tampa", "FL", getAction()],
    ["James Houston", "Test Corp", "Dallas", "TX", getAction()],
  ];

  const options = {
    filterType: "checkbox",
    elevation: 1,
    selectableRowsHideCheckboxes: true,
  };

  const addActionToData = (data_) => {
    return data_.map((d) => d.push(getAction()));
  };

  // CSS - table-base contains in styles.scss
  return (
    <>
      <div className="table-base">
        <MUIDataTable
          title={"Registration Request List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
};

export default TableBase;
