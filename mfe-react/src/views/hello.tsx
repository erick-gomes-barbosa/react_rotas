import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPeople } from "../api/tests";
import "../styles/output.css";

type People = {
    idade
    nome
    sexo
}

const Hello: React.FC = () => {
    const [people, setPeople] = useState<People[]>([]);
    const {data, error} = getPeople();

    useEffect(() => {
        try{
            if(data && data.people) {
                setPeople(data.people);
            }
        } catch (e) {
            console.log(`Erro ao carregar os usuários: ${e}`);
            console.log(`Erro trago pelo Apollo: ${error}`);
        }
    }, [data, error]);

    const navigate = useNavigate()
    return(
        // <div className="flex items-center justify-center">
        //     <ul className="flex flex-col justify-center">
        //         {people.map((people, index) => {
        //             <li key={index}>
        //                 <div>
        //                     <p>{people.ppl_nome}</p>
        //                 </div>
        //             </li>
        //         })}
        //     </ul>
        // </div>
    <></>)
}

export default Hello;