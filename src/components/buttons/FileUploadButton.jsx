import { FunctionComponent, InputHTMLAttributes, ReactElement, useState } from "react";
import { SectionColumn, SectionRow } from "../section/index";

//images
// import plusImg from "../../../public/assets/icons/plus.svg";

const FileUploadButton = (props) => {
	const [isSelected, setisSelected] = useState();
	const { onClick } = props;

	const handleClick = () => {
		onClick(props.path);
		setisSelected(props.isSelected);
	};
	return (
		<div>
			<button
				onClick={() => {
					handleClick();
				}}
				className={props.className}>
				<SectionColumn className='grid justify-items-center'>
					<div>
						<div
							className={
								props.state? "fileUploadButton relative border-4 border-x-green-500":
								isSelected
									? "fileUploadButton relative border-4 border-x-red-500"
									: "fileUploadButton relative"
							}>
							<div className=' absolute top-0 right-0'>
								{/* <img
                                    // loader ={() => LoginPageImage}
                                    src={props.plusImg}
                                    alt="Picture of the author"
                                    width={18}
                                    height={18}/> */}
							</div>
							<div className=' absolute  bottom-4 right-4'>
								<img
									// loader ={() => LoginPageImage}
									src={props.image}
									alt='Picture of the author'
									width={21}
									height={21}
								/>
							</div>
						</div>
					</div>
					<span className='fileUploadButtonText'> {props.btnName} </span>
				</SectionColumn>
			</button>
		</div>
	);
};

export default FileUploadButton;
