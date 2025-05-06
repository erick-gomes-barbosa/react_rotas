import { gql } from "@apollo/client";

export const SELECT_PEOPLE = gql `
    query MyQuery {
        people {
            ppl_id
            ppl_idade
            ppl_nome
            ppl_sexo
        }
    }
`;