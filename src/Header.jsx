import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle, BsSearch } from "react-icons/bs";

export default function Header({opensidebar}){
    return(
        <>
        <header className="header">
            <div className="menu-icon">
               <BsJustify className="icon" onClick={opensidebar}/>
            </div>
            <div className="header-left">
                <BsSearch className="icon"/>
            </div>
            <div className="header-right">
                <BsFillBellFill className="icon"/>
                <BsFillEnvelopeFill className="icon"/>
                <BsPersonCircle className="icon"/>
            </div>
        </header>
        </>
    )
}