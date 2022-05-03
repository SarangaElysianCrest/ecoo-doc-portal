import React, { useEffect, useState } from "react";
import SriLankaNationalLogo from "../../assets/images/DocImage/SriLankaNationalLogo.png";
import mobileLogo from "../../assets/images/M1Logo-White.png";
// import ProfileWrapper from "../../features/user-profile/profileWrapper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { SectionColumn, SectionRow } from "../../components/section";
import { Avatar, Chip } from "@material-ui/core";
import PopupButton from "../../components/buttons/PopupButton";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex flex-row  flex-wrap  justify-between navbar-row ">
      <div className="w-4/12 ">
        <div className="flex px-5 mx-5">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span className="username px-5">Hello! Mr.Herath (CRO)</span>
          <Chip
            className="mt-2"
            size="small"
            label="2022-05-03 | 7.00 PM"
            component="a"
            href="#basic-chip"
            clickable
          />
        </div>
      </div>
      <div className="w-3/12 "></div>
      <div className="w-5/12 pr-10">
        <SectionRow className="ml-10 justify-end">
          <PopupButton />
          <img
            src={SriLankaNationalLogo}
            alt=""
            className="SriLankaNationalLogo text-center"
          />
          <SectionColumn className="grid justify-self-center ml-8">
            <span className="docText">Department of Commerce</span>
            <span className="docSubText">Electronic Certificate of Origin</span>
          </SectionColumn>
        </SectionRow>
      </div>
    </nav>
  );
};

export default Navigation;
