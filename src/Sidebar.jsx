import { BsArchiveFill, BsCart3, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from "react-icons/bs";

export default function Sidebar({opensidebartoggle,opensidebar}){
    return(
        <>
        <aside id="sidebar" className={opensidebartoggle ?"sidebar-responsive": ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className="icon-header"/> SHOP 
                </div>
                <span className="icon close-icon" onClick={opensidebar}>X</span>
            </div>
            <ul className="sidebar-list">
            <li className="sidebar-list-item">
                    <a href="">
                        <BsGrid1X2Fill className="icon"/> Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsArchiveFill className="icon"/> Products
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGrid3X3GapFill className="icon"/> Category
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsPeopleFill className="icon"/> Customers
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsListCheck className="icon"/> Inventory
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsMenuButtonWideFill className="icon"/>Report 
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGearFill className="icon"/> Setting
                    </a>
                </li>
            </ul>
        </aside>
        </>
    )
}