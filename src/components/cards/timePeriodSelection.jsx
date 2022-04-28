import React, { Component, useState } from "react";
import { SectionRow } from "../section";

export default function TimePeriodSelection({title,value,...props}) {
    const [cliked, setCliked] = useState(0)

    const handleClik = (n) => { 
        setCliked(n)
        console.log(cliked);
     }

  return (
    <React.Fragment>
        <SectionRow className="timePeriodSelectionMainDiv mb-2">
            <div className={cliked === 0 ?  ("timePeriodSelectionDivCliked") : ("timePeriodSelectionDiv")}><button className={cliked === 0 ?  ("timePeriodSelectionTxtCliked") : ("timePeriodSelectionTxt")} onClick={(e) =>handleClik(0)}>Today</button></div>
            <div  className={cliked === 1 ?  ("timePeriodSelectionDivCliked") : ("timePeriodSelectionDiv")}><button className={cliked === 1 ?  ("timePeriodSelectionTxtCliked") : ("timePeriodSelectionTxt")} onClick={ (e) => handleClik(1)}>Weekly</button></div>
            <div  className={cliked ===2 ?  ("timePeriodSelectionDivCliked") : ("timePeriodSelectionDiv")}><button className={cliked === 2 ?  ("timePeriodSelectionTxtCliked") : ("timePeriodSelectionTxt")} onClick={(e) => handleClik(2)}>Monthly</button></div>
        </SectionRow>
        
    </React.Fragment>
  );
}
