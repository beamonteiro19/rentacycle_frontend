import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="flex flex-row p-4 gap-4 h-screen">
        <div className="basis-auto h-full">
          <Sidebar />
        </div>
        {/* 3 */}
        <div className="basis-full">
          <div className="w-full h-full bg-white rounded-lg shadow-md"></div>
        </div>
        {/* 2 */}
        <div className="basis-full">
          <div className="w-full h-full bg-white rounded-lg shadow-md"></div>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
