import { FaSearch } from "react-icons/fa";


export default function Search(){

    return(
        <div  className="search" >
            <div className=" flex flex-row">
                <input className="searchInput"  type="text" placeholder="Search" />
                <FaSearch className="searchIcon" />
            </div>
        </div>
    )
}