import DrawerItem from "./DrawerItem";
import { Link } from "react-router-dom";

export default function Drawer({ items }) {
  return (
    <div className={"flex flex-col "}>
      <div className="drawer">
        {/* <Search/> */}
        <div className="spaceDrawer"></div>
        {items.map((item, i) => (
          <DrawerItem key={`drawer-item-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}
