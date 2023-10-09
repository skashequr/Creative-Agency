import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Header } from "../../Components/Header/Header";
import UpCommingEvent from "../../Components/UpCommingEvent/UpCommingEvent";

const Home = () => {
    const x = useContext(AuthContext)
    console.log(x)
    return (
        <div>
            <Header></Header>
            <UpCommingEvent></UpCommingEvent>
        </div>
    );
};

export default Home;