import { ArrowLineLeft, Bicycle, ChartLine, House, Stack, Users } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col h-full">
    
      <div id="sideLogo" className="bg-zinc-300 p-4 mb-4 rounded-lg shadow-md ">
        <div className="flex justify-center ">
          <Bicycle className=""size={32} weight="light" />
        </div>
      </div>

      <div id="sideMenu" className="bg-zinc-300 p-4 flex-1 rounded-lg shadow-md">
        <div className="flex flex-col gap-8 items-center ">
          <Link to={"/"}><House size={32} weight="light" /></Link>
          <Link to={"/"}><Users size={32} weight="light" /></Link>
          <Link to={"/"}><ChartLine size={32} weight="light" /></Link>
          <Link to={"/"}><Stack size={32} weight="light" /></Link>
        </div>
      </div>

      <div id="sideLogout" className="bg-zinc-300 p-4 mt-4 rounded-lg shadow-md">
        <div className="flex justify-center">
          <Link to={"/"}><ArrowLineLeft size={32} weight="light" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;