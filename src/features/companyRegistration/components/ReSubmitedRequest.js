import React, { useState } from "react";
import SPENDING from "../../../assets/images/Monthly Spending.svg";

const ReSubmitedRequest = (props) => {
  return (
    <div className="spending-cards mt-6">
      <span className="heading-1"></span>
      <div className=" bg-white rounded-xl shadow-md overflow-hidden card-2 relative">
        <div className="grid grid-cols-12 items-center spending-box">
          <div className="col-span-1 "></div>
          <div className="col-span-10 ">
            <div>
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-3 ">
                  <div className="tran-icon rounded-full relative">
                    <img
                      src={SPENDING}
                      className="h-6 w-6 tran-icon-2 "
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-8 ">
                  <div className="card-1-heading ">Resubmitted</div>
                  <div className="card1-price mb-2">02</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ReSubmitedRequest;
