import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user , lodding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if (lodding) {
        return <div className="flex justify-center items-center mt-36"><span className="loading loading-ring text-[#543E93]  h-80 w-80 loading-xs"></span></div>
    }
    if (user) {      
        return children      
    }
    return <Navigate state={location.pathname} to="/login" replace={true} />
    
};

export default PrivetRoute;