import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFileAPI_adapter, getFromStep1_adapter, getFromStep2_adapter, getFromStep3_adapter, getFromStep4_adapter, getFromStep5_adapter } from "../../app/api/adapter";
import { API_BASE_URL } from "../../app/api/core_api";
import { getFileURL } from "../../app/api/file_api";
import { useAlert } from "../../app/context/alerts";
import { useStore } from "../../app/context/store";
import { callAPI } from "../../app/helper/useAPI";
import useLocalStorage from "../../app/helper/useLocal";
import PromptBase from "../../components/model/promptBase";
import ReaderImage from "../../components/pdfPreview/readerImage";
import ReaderPDF from "../../components/pdfPreview/readerPDF";

let i = 0;
export default function Temp(props) {
  const [file, setFile] = useState(null);
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // const [value, setValue] = useLocalStorage("TEST",{step:"start"})
  const [value, setValue] = useLocalStorage("REJECT",[])
  const {store,setStore} = useStore();
  const {setAlert} = useAlert()

  useEffect(() => {
    console.log("UI 01:",data);
    console.log("UI 02:",data2);
    console.log("UI 03:",data3);
    console.log("UI 04:",data4);
    console.log("UI 05:",data5);
  }, [data,data2,data3,data4,data5]);

  const hanleClick = () => {
    callAPI(() => getFromStep1_adapter(1), setData);
    callAPI(() => getFromStep2_adapter(1), setData2);
    callAPI(() => getFromStep3_adapter(1), setData3);
    callAPI(() => getFromStep4_adapter(1), setData4);
    callAPI(() => getFromStep5_adapter(1), setData5);
  };

  
  return (
    <>
      <Button onClick={() => setFile("/image/sign-1.png")}>one</Button>
      <Button onClick={() => setFile(getFileURL("67359631-f381-4701-a06a-8a1f9e086e08"))}>two</Button>
      <Button onClick={() => setFile(getFileURL("52dadc3f-28f6-4827-aa0b-f510b5ca79f5"))}>three</Button>
      {/* <Button onClick={hanleClick}>API</Button> */}
      {/* <Button onClick={() => getFileAPI_adapter('376fe7c2-606f-4f1f-ab2e-ecd48500a8ac')}>FILE</Button> */}
      {/* <Button onClick={() => setValue({...value,[`step-${++i}`]:"HI"})}>Local</Button> */}
      {/* <Button onClick={() => setValue([...value,{[`step-${++i}`]:"koo"}])}>Local</Button>
      <Button onClick={() => alert(JSON.stringify(store))}>Store</Button>
      <Button onClick={() => setStore({...store,test:prompt('HI')})}>updateStore</Button> */}

      <Button onClick={() => setAlert({message:"HI",show:true})}>Alert</Button>
      <Button onClick={() => setIsOpen(true)}>OPEN</Button>
      
      <PromptBase isOpen={isOpen} handleDismiss={()=> setIsOpen(false)}/>
      
      {/* <div><ReaderPDF extension=".jpg" path={file} /></div> */}
      <div><ReaderImage path={file} description="ID Front" width="300px" height="300px"/></div>
    </>
  );
}
