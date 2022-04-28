import { SectionColumn, SectionRow } from "../../../components/section";
import React from "react";
import { Link } from "react-router-dom";

const CompanyRegistrationCard = (props) => {
  return (
    <React.Fragment>
      <div className="tran-col">
        <span className="heading-1">Company Registration</span>
        <Link to="/web/companyRegistration">
          <div className=" bg-white rounded-xl shadow-md overflow-hidden card-4 relative">
            <div>
              <div className="grid grid-cols-12 flex flex-wrap items-center  merchant-data">
                <div className="col-span-1"></div>
                <div className="col-span-3"></div>
                <div className="col-span-5 sm:col-span-4">
                  <div className="flex flex-wrap ">
                    <div className="tran-heading-1">New Registration</div>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-4 ml-8">
                  <div className="tran-heading-1">99</div>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <div className="grid grid-cols-12 flex flex-wrap items-center  merchant-data">
                <div className="col-span-1"></div>
                <div className="col-span-3"></div>
                <div className="col-span-5 sm:col-span-4">
                  <div className="flex flex-wrap ">
                    <div className="tran-heading-1">Resubmitted</div>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-4 ml-8">
                  <div className="tran-heading-1">09</div>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <div className="grid grid-cols-12 flex flex-wrap items-center  merchant-data">
                <div className="col-span-1"></div>
                <div className="col-span-3"></div>
                <div className="col-span-5 sm:col-span-4">
                  <div className="flex flex-wrap ">
                    <div className="tran-heading-1">Completed</div>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-4 ml-8">
                  <div className="tran-heading-1">105</div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CompanyRegistrationCard;
