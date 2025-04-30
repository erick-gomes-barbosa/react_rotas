import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div>Home</div>
            <button onClick={() => navigate("/hello")} > Clique Aqui... </button>
        </div>
    )
}

export default Home;