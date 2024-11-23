import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
function App() {
  const[opensidebartoggle,setOpensidebartoggle]=useState(false)
  const opensidebar=()=>{
    setOpensidebartoggle(!opensidebartoggle)
  }
  return (
    <>
      <div className="grid-container">
        <Header opensidebar={opensidebar}/>
        <Sidebar opensidebartoggle={opensidebartoggle} opensidebar={opensidebar}/>
        <Home/>
      </div>
    </>
  );
}

export default App;
