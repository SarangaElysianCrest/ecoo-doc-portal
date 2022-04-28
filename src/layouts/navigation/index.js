import React, { useEffect, useState } from "react";
import SriLankaNationalLogo from "../../assets/images/DocImage/SriLankaNationalLogo.png";
import mobileLogo from "../../assets/images/M1Logo-White.png";
// import ProfileWrapper from "../../features/user-profile/profileWrapper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { SectionColumn, SectionRow } from "../../components/section";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex flex-row  flex-wrap  justify-between navbar-row ">
      <div className="w-4/12 "></div>
      <div className="w-4/12 "></div>
      <div className="w-4/12 ">
        <SectionRow>
          <div className="col-span-5  sm:col-span-6 text-center mt-3">
            <span className="username ">Hello! DJ Bravo</span>
          </div>
          <img
            src={SriLankaNationalLogo}
            alt=""
            className="SriLankaNationalLogo text-center"
          />
          <SectionColumn className="grid justify-self-center">
            <span className="docText">Department of Commerce</span>
            <span className="docSubText">Electronic Certificate of Origin</span>
          </SectionColumn>
        </SectionRow>
      </div>
    </nav>
  );
};

export default Navigation;
