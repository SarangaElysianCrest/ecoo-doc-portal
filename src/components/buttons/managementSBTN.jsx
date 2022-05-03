import React from "react"


const ManagementSBTN = (props,image ) => { 

    const handleClick = (personDetails) => { 
		console.log(props.image);
        console.log(personDetails);
        props.setselectedPerson(personDetails)

     }
    return(
        <React.Fragment>
            <div className=' bg-white rounded-xl shadow-lg overflow-hidden managementBTN relative mb-5'>
			<button className='grid grid-cols-12 items-center spending-box' onClick={(e) => handleClick(props.props)}>
				<div className='col-span-1 '></div>
				<div className='col-span-10 '>
					<div>
						<div className='grid grid-cols-12 items-center'>
							<div className='col-span-3 '>
								<div
									className={props?.props.designation === "Chairman" ? ("managementBtn-icon-chirman rounded-full relative") : ("managementBtn-icon rounded-full relative")}
									>
									<props.image className="className='h-6 w-6 tran-icon-2 "/>
								</div>
							</div>
							<div className='col-span-1'></div>
							<div className='col-span-8 '>
								<span className='managementBTNText '>{props?.props.designation}</span>
								{/* <span className='StatCardPresentage ml-1'>{presentage}%</span> */}
								{/* <div className='StatCardText '>asas</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-1'></div>
			</button>
		</div>
        </React.Fragment>
    )
 }

 export default ManagementSBTN