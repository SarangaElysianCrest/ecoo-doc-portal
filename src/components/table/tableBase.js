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
    ["Joe James", "Test Corp", "125000-0", "9254222", getAction()],
    ["John Walsh", "Test Corp", "15201-0", "2545212", getAction()],
    ["Bob Herm", "Test Corp", "12542-0", "125142", getAction()],
    ["James Houston", "Test Corp", "542252-0", "124885", getAction()],
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
