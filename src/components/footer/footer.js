import { Link } from "react-router-dom";


export default function footer(){

    return(
        <div  >
            <div className="flex flex-row">
                <div className="footerBtns ">
                    <Link className="mr-3">	&#183; Privecy policy</Link>
                    <Link className="mr-3">	&#183; Terms of use</Link>
    
                    <Link className="">	&#183; Accessibility</Link>
                </div>
            </div>
            <span className="footerText">&#169; M1 space. All rights reserved</span>
          
        </div>
    )
}