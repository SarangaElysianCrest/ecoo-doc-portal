import React, { Component } from "react";
import SPENDING from "../../assets/images/Monthly Spending.svg";


export default function StatCard({image,value,text,presentage}) {
  return (

      <div className=" bg-white rounded-xl shadow-md overflow-hidden statCard relative mb-5">
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
                  <span className="StatCardValue">{value}</span><span className="StatCardPresentage ml-1">{presentage}%</span>
                  <div className="StatCardText ">{text}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
  );
}
