import { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import { SectionRow } from "../section";
import RoundedButton from "../buttons/RoundedButtons";
import RejectDialog from "../alerts/rejectPrompt";

// now: accept relative pdf path of pdf in public/pdf dir
// todo: accept pdf id and fetch from file server

export default function PDFView02(props) {
  const viewer = useRef(null);
  const [render, setRender] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(props.path);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const viewerDiv = useRef < HTMLDivElement > null;

  // useEffect(() => {
  //   WebViewer(
  //     {
  //       path: "lib",
  //       initialDoc:
  //         "http://bnr.wp.gov.lk/sin/wp-content/uploads/2019/07/Thani-Pudgala.pdf",
  //     },
  //     viewer.current
  //   ).then((instance) => {
  //     const { docViewer } = instance;
  //     instance.UI.disableElements(["ribbons"]);
  //     instance.UI.disableElements(["toolsHeader"]);
  //   });
  // }, []);

  useEffect(() => {
    // window.location.reload();
    WebViewer(
      {
        path: "/lib",
        initialDoc: "/pdf/Cd3.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { docViewer } = instance;
      // you can now call WebViewer APIs here...
      // hide the ribbons and second header
      instance.UI.disableElements(["ribbons"]);
      instance.UI.disableElements(["toolsHeader"]);
    });
  }, [props.path]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "40h",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: "5px",
        borderColor: "#e9e9e9;",
        borderRadius: "20px",
      }}
    >
      <div className="header">VAT Certificate</div>
      <div
        className="webviewer"
        ref={viewer}
        style={{ height: "400px", width: "650px", borderRadius: "20px" }}
      ></div>
      <SectionRow>
        <RejectDialog
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          isOpen={open}
        />
      </SectionRow>
      <div
        className="buttonContainer"
        style={{
          // height: "50px",
          width: "750px",
          borderRadius: "20px",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></div>
    </div>
  );
}
