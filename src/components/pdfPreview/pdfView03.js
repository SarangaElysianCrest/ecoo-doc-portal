import { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";

// now: accept relative pdf path of pdf in public/pdf dir
// todo: accept pdf id and fetch from file server

export default function PDFView03(props) {
  const viewer = useRef(null);
  const [render, setRender] = useState(false);
  console.log(props.path);

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
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#ccc",
      }}
    >
      <div className="header">PDF Viewer</div>
      <div
        className="webviewer"
        ref={viewer}
        style={{ height: "800px", width: "650px", borderRadius: "20px" }}
      ></div>
      <div
        className="buttonContainer"
        style={{
          height: "50px",
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
