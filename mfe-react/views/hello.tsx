import React from "react";
import { useNavigate } from "react-router-dom";

const Hello: React.FC = () => {
    const navigate = useNavigate()
    return(
        <div>
            <div>Hello World</div>
            <button onClick={() => navigate("/home")} > Clique Aqui... </button>
        </div>
    )
}

export default Hello;