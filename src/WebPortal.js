import React, { lazy } from "react";
import Navigation from "./layouts/navigation";
import Section, { SectionColumn } from "./components/section";
import Drawer from "./components/drawer/Drawer";
import config from "./app/config";
import { Route } from "react-router-dom";
import CompanyRegisrationHome from "./features/companyRegistration/CompanyRegisrationHome";
import OverView from "./features/overview/OverView";

const WebPortal = () => {
  return (
    <div>
      {/* Top Navigation */}
      <Navigation />
      <Section className="main-container">
        <SectionColumn className="lg:w-2/12 justify-center main-section-left">
          <Drawer items={config.drawer} />
        </SectionColumn>
        <SectionColumn className="lg:w-10/12 main-section-right relative">
          <Route
            exact
            path={"/web/companyRegistration"}
            component={CompanyRegisrationHome}
          />
          <Route exact path={"/web/overview"} component={OverView} />
        </SectionColumn>
      </Section>
    </div>
  );
};

export default WebPortal;
