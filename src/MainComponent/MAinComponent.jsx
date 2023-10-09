import { Outlet } from "react-router-dom";
import Navbar from "../Components/Routes/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

const MAinComponent = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MAinComponent;