import { Outlet } from "react-router-dom";
import Navbar from "../Components/Routes/Navbar/Navbar";

const MAinComponent = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MAinComponent;