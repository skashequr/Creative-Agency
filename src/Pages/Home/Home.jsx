import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Header } from "../../Components/Header/Header";

const Home = () => {
    const x = useContext(AuthContext)
    console.log(x)
    return (
        <div>
            <Header></Header>
            
        </div>
    );
};

export default Home;