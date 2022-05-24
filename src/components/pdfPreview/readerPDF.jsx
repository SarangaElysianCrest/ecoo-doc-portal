import { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import { SectionRow } from "../section";
import RoundedButton from "../buttons/RoundedButtons";
import RejectDialog from "../alerts/rejectPrompt";
import AcceptButton from "../buttons/acceptbutton";
import { Button } from "@material-ui/core";

// now: accept relative pdf path of pdf in public/pdf dir
// todo: accept pdf id and fetch from file server

const getExtension = (_path) => {
  let ext = _path.endsWith(".png")
    ? ".png"
    : _path.endsWith(".jpg")
    ? ".jpg"
    : _path.endsWith(".doc")
    ? ".doc"
    : ".pdf";
  return ext;
};

export default function ReaderPDF({extension,...props}) {
  const viewer = useRef(null);
  const [render, setRender] = useState(false);
  const [open, setOpen] = useState(false);
  const [_instance, setInstance] = useState(null);

  useEffect(() => {
    if (!_instance) {
      console.log(">>>>", props.path);
      WebViewer(
        {
          path: "/lib",
          initialDoc: "/pdf/init.pdf",
        },
        viewer.current
      ).then((instance) => {
        const docViewer = instance.Core.documentViewer;
        docViewer.addEventListener("documentLoaded", () => {
          setInstance(instance);
        });

        // you can now call WebViewer APIs here...
        // hide the ribbons and second header
        instance.UI.disableElements(["ribbons"]);
        instance.UI.disableElements(["toolsHeader"]);
      });
    }
  }, []);

  useEffect(() => {
    if (_instance !== null) {
      _instance.UI.loadDocument(props.path, {
        documentId: "1",
        // filename: `sample${getExtension(props.path)}`,
        filename: `sample${extension||".pdf"}`,
      });
    }
  }, [props.path]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    if (_instance !== null) {
      _instance.UI.closeDocument().then(() => {
        console.log("Document is closed");
      });
    }
  };
  const handleReload = () => {
    if (_instance !== null) {
      _instance.UI.loadDocument(props.path, {
        documentId: "1",
        filename: `sample${getExtension(props.path)}`,
      });
    }
  };

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
      <SectionRow>
        <Button onClick={handleRemove}>Remove</Button>
        <Button onClick={handleReload}>Reload</Button>
      </SectionRow>
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
          width: "auto",
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
