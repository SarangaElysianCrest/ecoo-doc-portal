import { Link, useLocation } from "react-router-dom";

export default function DrawerItem({
    icon,
    label,
    path,
    path2,
    
}){
    let location = useLocation();

    return (
        <ul className="sidebarList">
            <Link to={path} >
                <div className="row"  id={location.pathname === path || location.pathname.includes(path2) ? "active" : ""}>                 
                    <div className="pr-4 " id="icon"><img src={icon} alt="" width="25" height="25"/></div>
                    <div id="label">{label}</div>
                    <div className={location.pathname === path || location.pathname.includes(path2) ? "dot" : "dot-hide"}>&bull;</div>
                </div>
            </Link>
        </ul>
        
    )
}