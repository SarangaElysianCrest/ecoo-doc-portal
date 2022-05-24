import { useEffect, useState } from "react";
import { APPROVED, SELECT } from "../../Helpers/constants";
import { SectionColumn } from "../section/index";

const selectStyle = "fileUploadButton relative border-4 border-x-red-500";
const approveStyle = "fileUploadButton relative border-4 border-x-green-500";
const defaultStyle = "fileUploadButton relative";

const FileUploadButton = ({ image, btnName, state, ...props }) => {
  const [isSelected, setisSelected] = useState("");
  const { onClick } = props;

  useEffect(() => {
    setisSelected(
      state.isApprove === APPROVED
        ? approveStyle
        : state.isApprove === SELECT
        ? selectStyle
        : defaultStyle
    );
  }, [state]);


  const handleClick = () => {
    onClick(state);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        className={props.className}
      >
        <SectionColumn className="grid justify-items-center">
          <div>
            <div className={isSelected||defaultStyle}>
              <div className=" absolute top-0 right-0"></div>
              <div className=" absolute  bottom-4 right-4">
                <img
                  src={image}
                  alt="Picture of the author"
                  width={21}
                  height={21}
                />
              </div>
            </div>
          </div>
          <span className="fileUploadButtonText"> {btnName} </span>
        </SectionColumn>
      </button>
    </div>
  );
};

export default FileUploadButton;
